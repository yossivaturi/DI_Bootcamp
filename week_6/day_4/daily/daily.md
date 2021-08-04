-- 1.Create a table called orders and a table called items. 
-- You decide which fields should be in each table,
-- although make sure the items table has a column called price.

-- 2.There should be a one to many relationship between the orders 
-- table and the items table. An order can have many items, but an item can belong to only one order.

-- CREATE TABLE items(
--     item_id INTEGER PRIMARY KEY ,
--     price DOUBLE PRECISION
-- );

-- CREATE TABLE orders(
--     order_id INTEGER ,
--     item_id INTEGER REFERENCES items(item_id)
-- );

-- INSERT INTO items (item_id,price)
-- VALUES (1,10),(2,20),(3,30);

-- INSERT INTO orders (order_id,item_id)
-- VALUES (5,1),(7,3),(5,2);

-- 3.Create a function that returns the total price for a given order.

-- CREATE FUNCTION total_price_for_order(order_id_para integer) 
-- RETURNS integer AS $$
-- BEGIN
--  	RETURN (SELECT SUM(price)
-- 	FROM items INNER JOIN orders ON items.item_id=orders.item_id
-- 	WHERE orders.order_id=order_id_para);
-- END;
-- $$
-- LANGUAGE 'plpgsql';

-- Displays the the total price of order_id=5 which is the sum of prices of item 1 and item 2
-- SELECT total_price_for_order(5);