SELECT * FROM sakila.payment
WHERE MONTH(payment_date) = 2;
-- OR DATE(payment_date) = '2006-02-15';