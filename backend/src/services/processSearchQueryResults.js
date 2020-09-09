const getDecimals = require('./getDecimals');

module.exports = (items) => {
  const processedItems = items.map((item) => ({
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
    state_name: item.address.state_name,
  }));

  return processedItems;
};