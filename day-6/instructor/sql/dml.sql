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
UPDATE urls
SET visit_count = visit_count + 1;