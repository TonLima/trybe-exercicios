-- Active: 1654631288725@@127.0.0.1@3306@sakila
SELECT first_name,last_name,email FROM customer
WHERE last_name IN ('hicks','crawford','henry','boyd','mason','morales','kennedy')
ORDER BY first_name;