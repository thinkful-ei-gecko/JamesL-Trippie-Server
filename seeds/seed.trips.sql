BEGIN;

TRUNCATE
  trips
  RESTART IDENTITY CASCADE;

INSERT INTO trips (trip_title)
  VALUES
    ('New York'),
    ('Miami');

COMMIT;