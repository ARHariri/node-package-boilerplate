// ? The "sum" function exported to be accessible for unit testing
export const sum = (...args: Array<number>): number => {
  return args.reduce((num1, num2) => num1 + num2, 0);
};

export const average = (...args: Array<number>): number => {
  if (args.length === 0) {
    return 0;
  }

  return sum(...args) / args.length;
};
