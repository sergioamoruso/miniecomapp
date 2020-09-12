module.exports = (number) => {
  // Convert to string to avoid dealing with floating point precision
  const converted = number.toFixed(2);

  const decimals = converted.split('.')[1];

  const final = parseInt(decimals);

  return final;
};
