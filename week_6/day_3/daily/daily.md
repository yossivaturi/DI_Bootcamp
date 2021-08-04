-- 1.Create 3 different tables, each one with a different relationship.

-- One to One :  An actor can own only one car, and a car belongs to only one person


-- CREATE TABLE cars (
--   car_id SERIAL PRIMARY KEY,
--   brand VARCHAR(30) NOT NULL,
--   color VARCHAR(30) NOT NULL,
--   owner_id INTEGER UNIQUE REFERENCES actors (actor_id)
-- );

-- CREATE TABLE actors (
--   actor_id SERIAL PRIMARY KEY,
--   actor_name VARCHAR(30) NOT NULL,
--   car_id INTEGER UNIQUE REFERENCES cars (car_id)
-- );

-- one to many - one actor can have many houses
-- CREATE TABLE houses (
--   house_id SERIAL PRIMARY KEY,
--   owner_id INTEGER UNIQUE REFERENCES actors (actor_id)
-- );

-- 2.Join them with all the types of PostgreSQL Joins you’ve learned.

-- SELECT *
-- FROM (cars INNER JOIN actors ON cars.owner_id=actors.actor_id)
-- INNER JOIN houses ON actors.actor_id=houses.house_id

-- SELECT *
-- FROM (cars LEFT JOIN actors ON cars.owner_id=actors.actor_id)
-- LEFT JOIN houses ON actors.actor_id=houses.house_id

-- SELECT *
-- FROM (cars RIGHT JOIN actors ON cars.owner_id=actors.actor_id)
-- RIGHT JOIN houses ON actors.actor_id=houses.house_id

-- SELECT *
-- FROM (cars FULL JOIN actors ON cars.owner_id=actors.actor_id)
-- FULL JOIN houses ON actors.actor_id=houses.house_id