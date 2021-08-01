-- SELECT * FROM actors
-- In this exercise we will be using the actors table from todays lesson.
-- 1. Count how many actors are in the table.

-- SELECT COUNT(actor_id) FROM actors

-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
-- ERROR

INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
VALUES (, , , );