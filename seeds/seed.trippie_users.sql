BEGIN;

TRUNCATE
  trippie_users
  RESTART IDENTITY CASCADE;

INSERT INTO trippie_users (username, fullname, password)
  VALUES
    ('testuser', 'james lee', '$2a$12$LCE38IsnHWLjbSRp9NJtWuuiYR96kPkZLn7wSed57zAZq9/4YiRG.'), 
    ('dunder', 'Dunder Mifflin', 'theofficerocks'),
    ('b.deboop', 'Bodeep Deboop', '$2a$12$VQ5HgWm34QQK2rJyLc0lmu59cy2jcZiV6U1.bE8rBBnC9VxDf/YQO'),
    ('c.bloggs', 'Charlie Bloggs', '$2a$12$2fv9OPgM07xGnhDbyL6xsuAeQjAYpZx/3V2dnu0XNIR27gTeiK2gK'),
    ('s.smith', 'Sam Smith', '$2a$12$/4P5/ylaB7qur/McgrEKwuCy.3JZ6W.cRtqxiJsYCdhr89V4Z3rp.');

COMMIT;

--testuser password = mypassword