-- Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H.
SELECT name FROM Projects
WHERE code LIKE '%H%';