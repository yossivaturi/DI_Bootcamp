-- Exercise 1 : Items And Customers

-- ALTER TABLE customers
-- ADD customer_id SERIAL PRIMARY KEY;
-- ALTER TABLE items
-- ADD item_id SERIAL PRIMARY KEY;

-- We will work on the public database that we created yesterday.

-- Use SQL to get the following from the database:

-- All items, ordered by price (lowest to highest).
-- SELECT * FROM items ORDER BY price ASC

-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
-- SELECT * FROM items WHERE price>=80 ORDER BY price DESC

-- The first 3 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.
-- SELECT * FROM customers ORDER BY first_name,last_name LIMIT 3

-- All last names (no other columns!), in reverse alphabetical order (Z-A)
-- SELECT last_name FROM customers ORDER BY last_name DESC


-- Create a table named purchases. It should have 2 columns :
-- customer_id and item_id. These columns are references from the tables customers and items.
-- Edit the data of the purchases table:
-- CREATE TABLE purchases (
-- customer_id INTEGER REFERENCES customers (customer_id),
-- item_id INTEGER REFERENCES items (item_id)
-- )

-- SELECT * FROM purchases

-- Add a row which references a customer by ID, but does not reference an item by ID (leave it blank).
-- INSERT INTO purchases (customer_id, item_id)
-- VALUES (2,null);

-- Does this work? Why/why not? when i leave it blank its an error but when i provide null
-- as a value its ok

-- Add 5 rows which reference existing customers and items.
-- INSERT INTO purchases (customer_id, item_id)
-- VALUES 
-- (1,1),
-- (1,2),
-- (1,3),
-- (2,1),
-- (3,1);




-- Use SQL to get the following from the database:
-- All purchases. Is this information useful to us? yes, we can know which customer bought what
-- SELECT * FROM purchases

-- All purchases, joining with the customers table.
-- SELECT * 
-- FROM purchases AS p INNER JOIN customers AS c
--      ON p.customer_id = c.customer_id

-- Purchases of the customer with the ID equal to 4.
-- SELECT * 
-- FROM purchases AS p 
-- WHERE p.customer_id=4

-- Purchases for a large desk AND a small desk

-- SELECT * 
-- FROM purchases AS p INNER JOIN items AS i
--      ON p.item_id = i.item_id
-- WHERE (i.item='Desk' AND i.item_size='Small') OR (i.item='desk' AND i.item_size='Large')


-- Create a purchase for Scott Scott – he bought a hard drive.

-- INSERT INTO items (item,item_size,price)
-- VALUES ('hard drive',null,250);

-- INSERT INTO purchases (customer_id, item_id)
-- VALUES ((SELECT customer_id FROM customers WHERE first_name='Scott' AND last_name='Scott')
-- 	,
-- 		(SELECT item_id FROM items WHERE item='hard drive')
--     );

-- SELECT * FROM purchases





-- Use SQL to show all the customers who have made a purchase. Show the following fields/columns:
-- Customer first name
-- Customer last name
-- Item name

-- SELECT first_name,last_name,item
-- FROM ((purchases AS p
-- INNER JOIN customers AS c ON p.customer_id = c.customer_id )
-- INNER JOIN items AS i ON  p.item_id=i.item_id); 



