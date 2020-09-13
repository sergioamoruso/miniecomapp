const formatDecimals = (decimals) => {
  let converted = decimals.toString();
  if (converted.length == 1) converted = converted.concat("0");
  return converted;
};

export default formatDecimals;
