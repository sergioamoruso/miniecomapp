module.exports = (number) => {
  // Convert to string to avoid dealing with floating point precision
  const converted = number.toString();

  // If it does not contain decimals, return null
  if (!converted.includes('.')) return null;

  const decimals = converted.split('.')[1];

  const final = parseInt(decimals);

  return final;
};
