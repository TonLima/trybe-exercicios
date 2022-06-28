SELECT * FROM payment
WHERE DATE(payment_date) = '2005-05-25';

SELECT * FROM payment
WHERE payment_date LIKE '2005-05-25%';