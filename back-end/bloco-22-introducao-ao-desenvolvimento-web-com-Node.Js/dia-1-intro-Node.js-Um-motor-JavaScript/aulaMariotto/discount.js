const discount = (price, age) => {
  const percent = age / 100;
  const finalPrice = price - ( price * percent);

  return finalPrice;
}

module.exports = discount;