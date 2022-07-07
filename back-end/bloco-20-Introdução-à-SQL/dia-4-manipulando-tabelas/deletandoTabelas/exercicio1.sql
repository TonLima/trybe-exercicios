-- Aqui estou descobrindo os Ids relacionados ao nome
SELECT actor_id FROM actor
WHERE first_name = 'KARL';

-- Aqui estou apagando as suas referências
DELETE FROM film_actor
WHERE actor_id = 12;

-- Aqui estou excluindo o item original
DELETE FROM actor
WHERE first_name = 'KARL';