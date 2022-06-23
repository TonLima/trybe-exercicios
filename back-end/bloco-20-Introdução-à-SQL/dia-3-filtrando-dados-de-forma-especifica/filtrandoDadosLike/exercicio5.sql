-- Active: 1654631288725@@127.0.0.1@3306@sakila
SELECT * FROM film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';