-- Active: 1654631288725@@127.0.0.1@3306@Scientists
-- Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra e em seu nome.
SELECT * FROM Scientists
WHERE name LIKE '%e%';