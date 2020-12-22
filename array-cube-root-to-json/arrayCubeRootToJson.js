const arrayCubeRootToJson = (arr) => {
  if (typeof arr !== "object") throw "invalid input";

  let result = {};
  arr.forEach((element) => {
    if (typeof element === "boolean" || isNaN(element))
      throw `invalid element found ${element}`;
      
    result[element] = Math.cbrt(element);
  });

  return result;
};

// arrayCubeRootToJson.test
export { arrayCubeRootToJson };
