-- SELECT * FROM students

-- CREATE TABLE students(
-- sid SERIAL PRIMARY KEY,
-- last_name VARCHAR (50) NOT NULL,
-- first_name VARCHAR (50) NOT NULL,
-- birth_date DATE NOT NULL
-- );

-- INSERT INTO students(last_name, first_name,birth_date)
-- VALUES
-- 	('Benichou', 'Marc', '02/11/1998'),
-- 	('Cohen', 'Yoan', '03/12/2010'),
-- 	('Benichou', 'Lea','07/27/1987'),
-- 	('Dux', 'Amelia', '07/04/1996'),
-- 	('Grez', 'David', '06/14/2003'),
-- 	('Simpson', 'Omer', '03/10/1980'),
-- 	('Sellam', 'Mickael', '02/09/1988')

-- SELECT first_name,last_name FROM students
-- SELECT first_name,last_name FROM students WHERE sid=2
-- SELECT first_name,last_name FROM students WHERE last_name='Benichou' AND first_name='Marc'
-- SELECT first_name,last_name FROM students WHERE last_name='Benichou' OR first_name='Marc'
-- SELECT first_name,last_name FROM students WHERE first_name LIKE '%a%'
-- SELECT first_name,last_name FROM students WHERE first_name LIKE 'a%' OR first_name LIKE 'A%'
-- SELECT first_name,last_name FROM students WHERE first_name LIKE '%a'
-- SELECT first_name FROM students WHERE first_name LIKE '%a_'
-- SELECT first_name,last_name FROM students WHERE sid=1 AND sid=3
-- SELECT * FROM students WHERE birth_date >= '01/01/2000'