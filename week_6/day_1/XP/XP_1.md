-- CREATE TABLE items (
-- item VARCHAR(20) NOT NULL,
-- item_size VARCHAR(20),
-- price INTEGER NOT NULL
-- )

-- CREATE TABLE customers (
-- first_name VARCHAR(20) NOT NULL,
-- last_name VARCHAR(20) NOT NULL
-- )

-- INSERT INTO items (item, item_size, price)
-- VALUES
-- 	('Desk','Small', 100),
-- 	('desk','Large', 300),
-- 	('Fan',Null, 80);

-- INSERT INTO customers (first_name, last_name)
-- VALUES
-- 	('Greg','Jones'),
-- 	('Sandra','Jones'),
-- 	('Scott','Scott'),
-- 	('Trevor','Green'),
-- 	('Melanie','Jhonson');

-- SELECT * FROM items

-- All the items with a price above 80 (80 not included).
-- SELECT * FROM items WHERE price > 80
-- All the items with a price below 300. (300 included)
-- SELECT * FROM items WHERE price <= 300
-- All customers whose last name is ‘Smith’ (What will be your outcome? EMPTY TABLE).
-- SELECT * FROM customers WHERE last_name = 'Smith'
-- All customers whose last name is ‘Jones’.
-- SELECT * FROM customers WHERE last_name = 'Jones'
-- All customers whose firstname is not ‘Scott’.
-- SELECT * FROM customers WHERE NOT first_name = 'Scott'