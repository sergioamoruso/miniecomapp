const formatAmount = (amount, includeDecimals = false) => {
    const withCents = amount.toFixed(2);
    const [intSection, decSection] = withCents.split(".");
    const intSectionArray = intSection.split("");
    const intSectionReverseArray = intSectionArray.reverse();
  
    const pointPositions = [];
    for (let i = 0; i < intSectionReverseArray.length; i++) {
      const remainder = i % 3;
      if (i > 2 && remainder == 0) pointPositions.push(i);
    }
  
    const intSectionReverseArrayWithFloatingPoints = intSectionReverseArray.reduce(
      (acc, cur, idx) => {
        if (pointPositions.includes(idx)) {
          acc.push(".");
          acc.push(cur);
        } else acc.push(cur);
        return acc;
      },
      []
    );
  
    const orderedArrayWithFloatingPoints = intSectionReverseArrayWithFloatingPoints.reverse();
    const intSectionWithFloatingPoints = orderedArrayWithFloatingPoints.join("");
    const final = includeDecimals
      ? intSectionWithFloatingPoints.concat(",", decSection)
      : intSectionWithFloatingPoints;
  
    return final;
  }

  export default formatAmount;