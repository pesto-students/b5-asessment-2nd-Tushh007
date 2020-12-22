function balancedBraces(str) {
  let stack = [];
  let openning_braces = ["(", "[", "{"];
  let closing_braces = [")", "]", "}"];

  for (let i = 0; i < str.length; i++) {
    if (openning_braces.includes(str[i])) stack.push(str[i]);
    if (closing_braces.includes(str[i])) {
      if (
        stack[stack.length - 1] ===
        openning_braces[closing_braces.indexOf(str[i])]
      )
        stack.pop();
    }
  }

  return stack.length === 0;
}

export { balancedBraces };
