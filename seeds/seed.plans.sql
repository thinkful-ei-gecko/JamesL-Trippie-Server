BEGIN;

TRUNCATE
  plans
  RESTART IDENTITY CASCADE;

INSERT INTO plans (location, from_date, to_date, notes, trip)
  VALUES
    ('time square', '2019-12-31', '2020-01-01', 'kicking off the new year', 1),
    ('beach party', '2020-02-10', '2020-02-10', 'eating and drinking on miami beach', 2);

COMMIT;