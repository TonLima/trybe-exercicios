-- Avante, falta pouco! Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene esses resultados em ordem alfabética decrescente.
SELECT * from Fornecedores
WHERE name  LIKE '%LTDA'
ORDER BY  name DESC;