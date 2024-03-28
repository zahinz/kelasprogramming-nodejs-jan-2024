-- POSTGRESQL
-- create a new database named 'bitly-clone-kp'
CREATE DATABASE "bitly-clone-kp";

-- delete the database
-- warning this will delete all data in the database and cannot be undone
DROP DATABASE "bitly-clone-kp";

-- create a new table named 'urls' with the following columns id, long_url, short_url, visit_count
-- id is a serial PRIMARY KEY
-- PRIMARY KEY is a constraint that enforces the uniqueness of the column
-- table name must be plural and written in snake_case (this_is_snake_case)
-- column names must be written in snake_case
-- every column must define a data type (serial, varchar, integer, date, boolean, decimal, text)
-- what is varchar(255)?
-- varchar is a variable-length string data type
-- 255 is the maximum number of characters that can be stored in the column
-- varchar vs text
-- text is a variable-length string data type that can store an unlimited number of characters
-- timestamp is a data type that stores the date and time
-- timestamp vs date 
CREATE TABLE urls(
    id serial PRIMARY KEY,
    long_url varchar(255),
    short_url varchar(255),
    visit_count integer
    created_at timestamp
)