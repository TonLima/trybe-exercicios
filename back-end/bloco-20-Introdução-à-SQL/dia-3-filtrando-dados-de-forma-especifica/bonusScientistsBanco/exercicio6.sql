-- Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.
SELECT * FROM Projects
WHERE hours > 250 AND hours < 800
ORDER BY hours;
------------- ou ------------------
SELECT * FROM Projects
WHERE hours BETWEEN 250 AND 800
ORDER BY hours;