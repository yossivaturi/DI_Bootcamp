-- 1.Get a list of all film languages.
-- SELECT name FROM language

-- 2.Get a list of all films joined with their languages – select the following details : 
-- film title, description, and language name. Try your query with different joins:
-- 	    1.Get all films, even if they don’t have languages.
-- SELECT title,description,name 
-- FROM language AS l RIGHT JOIN film AS f ON l.language_id=f.language_id
--  	2.Get all languages, even if there are no films in those languages.
-- SELECT title,description,name 
-- FROM language AS l LEFT JOIN film AS f ON l.language_id=f.language_id

-- 3.Create a new table called new_film with the following columns : id, name.
-- Add some new films to the table.
-- CREATE TABLE new_film(
-- fid SERIAL PRIMARY KEY,
-- name VARCHAR(20)
-- );
-- INSERT INTO new_film (name)
-- VALUES ('fight club'),
-- 	   ('inception');

-- 4.Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.

-- CREATE TABLE customer_review(
-- review_id SERIAL PRIMARY KEY,
-- film_id INTEGER REFERENCES new_film(fid) ON DELETE CASCADE,
-- language_id INTEGER REFERENCES language(language_id),
-- title VARCHAR(20),
-- score INTEGER CHECK(score BETWEEN 0 AND 10),
-- review_text TEXT,
-- last_update TIMESTAMP
-- );

-- 5.Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

-- INSERT INTO customer_review
-- (review_id,film_id,language_id,title,score,review_text,last_update)
-- VALUES 
-- (2, 1, 1, 'review on fight club', 10, 'omg this movie is the best', LOCALTIMESTAMP),
-- (1, 2, 1, 'review on inception', 8, 'this movie is ok', LOCALTIMESTAMP);

-- SELECT * FROM customer_review


-- 6.Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- DELETE FROM new_film WHERE fid=2;
-- SELECT * FROM customer_review

-- the record with film_id=2 inside customer_review table was also deleted(because of the CASCADE)
