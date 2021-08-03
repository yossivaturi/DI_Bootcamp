-- 1.Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- UPDATE film
-- SET language_id = 2
-- WHERE film_id=133 OR film_id=8 OR  film_id=1;

-- SELECT * FROM film

-- 2.Which foreign keys (references) are defined for the customer table? 
-- ANSWER:if we right click on the customer table->properties->Constraints->Foreign Key
-- we can see theres no definitions for foreign keys.

-- How does this affect the way in which we INSERT into the customer table?
-- ANSWER:Having active foreign keys on tables improves data quality 
-- but hurts performance of insert, update and delete operations.
-- Before those tasks database needs to check if it doesn't violate data integrity.


-- 3.We created a new table called customer_review. Drop this table. 
-- Is this an easy step, or does it need extra checking?
-- easy step, thers no other table that cascaded to customer_review so 
-- deleting it wont effect other tables

-- DROP TABLE customer_review;

-- 4.Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

-- SELECT * FROM rental 
-- WHERE return_date > NOW() OR return_date=null


-- 5.Find the 30 most expensive movies which are outstanding 
-- (ie. have not been returned to the store yet)
-- select * from film

-- SELECT rental_rate
-- FROM 
-- inventory 
-- INNER JOIN rental AS r1 ON inventory.inventory_id=r1.inventory_id
-- INNER JOIN film ON inventory.film_id=film.film_id
-- WHERE r1.rental_id IN (
-- 						SELECT r2.rental_id 
-- 						FROM rental AS r2 
-- 						WHERE r2.return_date > NOW() OR r2.return_date=null
-- 					)
-- ORDER BY rental_rate
-- LIMIT 30



