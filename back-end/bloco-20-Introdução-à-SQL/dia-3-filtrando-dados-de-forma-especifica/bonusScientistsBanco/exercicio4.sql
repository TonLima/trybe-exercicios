-- Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3, Ast3 ou Che1.
SELECT scientist AS 'Valores numéricos' FROM AssignedTo
WHERE project IN('AeH3', 'AsT3', 'Che1');