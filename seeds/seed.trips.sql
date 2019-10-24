BEGIN;

TRUNCATE
  trips
  RESTART IDENTITY CASCADE;

INSERT INTO trips (trip_title, user_id)
  VALUES
    ('New York', 1),
    ('Miami', 2);

COMMIT;