const getDecimals = require('./getDecimals');

module.exports = (item, description) => ({
  id: item.id,
  title: item.title,
  price: {
    currency: item.currency_id,
    amount: item.price,
    decimals: getDecimals(item.price),
  },
  picture: item.thumbnail,
  condition: item.condition,
  free_shipping: item.shipping.free_shipping,
  sold_quantity: item.sold_quantity,
  description: description.plain_text,
});
