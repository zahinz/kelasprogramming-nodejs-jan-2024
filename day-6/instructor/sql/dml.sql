-- POSTGRESQL
-- DML (Data Manipulation Language)
-- CRUD (Create, Read, Update, Delete)

-- table urls
-- CREATE TABLE urls(
--     id serial PRIMARY KEY,
--     long_url varchar(255),
--     short_url varchar(255) UNIQUE,
--     visit_count integer,
--     created_at timestamp
-- )

-- insert a new row into the table
INSERT INTO urls(long_url, short_url, visit_count, created_at)
VALUES('https://www.google.com', 'https://bit.ly/3e4r5t', 0, NOW());

-- difference between Delete and Truncate
-- Delete is a DML statement that removes rows from a table based on a condition
-- Truncate is a DDL statement that removes all rows from a table

-- update the visit_count of the row with id 1
-- running update without a where clause will update all rows in the table
-- be careful when running update without a where clause
UPDATE urls
SET visit_count = visit_count + 1;

-- update the visit_count of the row with id 1
UPDATE urls
SET visit_count = visit_count + 1
WHERE id = 1;

-- delete the row with id 1
DELETE FROM urls
WHERE id = 1;

-- read all rows from the table
SELECT * 
FROM urls;

-- read all for columns long_url, short_url and visit_count from the table
SELECT long_url, short_url, visit_count
FROM urls;

-- rename column 'long_url' to 'long url', 'short_url' to 'short url' in the table
SELECT long_url AS "long url", short_url AS "short url", visit_count AS "visit count"
FROM urls;

-- FILTERING
-- read all rows from the table where visit_count is greater than 4
SELECT *
FROM urls
WHERE visit_count > 4;

-- COUNT
-- read the number of rows in the table
SELECT COUNT(*)
FROM urls;

-- AVERAGE visit_count
-- read the average visit_count in the table
SELECT AVG(visit_count)
FROM urls;

-- MEDIAN visit_count
-- read the median visit_count in the table
SELECT PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY visit_count)
FROM urls;
