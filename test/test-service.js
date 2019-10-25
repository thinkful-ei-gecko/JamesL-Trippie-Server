const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function makeTestUsers() {
  return [
    {
      id: 1,
      username: 'user1',
      fullname: 'user1 full',
      password: 'testuser1pw'
    },
    {
      id: 2,
      username: 'user2',
      fullname: 'user2 full',
      password: 'testuser2pw'
    },
    {
      id: 3,
      username: 'user3',
      fullname: 'user3 full',
      password: 'testuser3pw'
    },    
  ]
};

function makeTestTrips(users) {
  
}