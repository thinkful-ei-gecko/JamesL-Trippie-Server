const knex = require('knex');
const jwt = require('jsonwebtoken');
const app = require('../src/app');
const service = require('./test-service');

describe('Auth Endpoints', function() {
  let db;

  const { testUsers } = service.createTripsFixtures();
  const testUser = testUsers[0];

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL
    });
    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy());

  before('cleanup', () => service.cleanTables(db));

  afterEach('cleanup', () => service.cleanTables(db));

  describe('POST /api/auth/login', () => {
    beforeEach('insert users', () => service.seedUsers(db, testUsers));

    const requiredFields = ['username', 'password'];

    requiredFields.forEach(field => {
      const loginAttemptBody = {
        username: testUser.username,
        password: testUser.password
      };
    });
    it(`responds 200 and JWT auth token using secret when valid credentials`, () => {
      const userValidCreds = {
        username: testUser.username,
        password: testUser.password,
      }
      const expectedToken = jwt.sign(
        { user_id: testUser.id },
        process.env.JWT_SECRET,
        {
          subject: testUser.username,
          algorithm: 'HS256',
        }
      );
      return supertest(app)
        .post('/api/auth/login')
        .send(userValidCreds)
        .expect(200, {
          authToken: expectedToken,
        })
    })
  });
});