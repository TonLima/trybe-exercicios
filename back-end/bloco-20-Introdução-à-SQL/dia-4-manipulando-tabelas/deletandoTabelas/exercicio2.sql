-- Aqui estou descobrindo os Ids e first_name relacionados ao actor
SELECT actor_id, first_name FROM actor
WHERE first_name = 'MATTHEW';

-- Aqui estou apagando as suas referências utilizando IN
DELETE FROM film_actor
WHERE actor_id IN (8, 103, 181, 523);

-- Aqui estou excluindo o item original
DELETE FROM  actor
WHERE first_name = 'MATTHEW';