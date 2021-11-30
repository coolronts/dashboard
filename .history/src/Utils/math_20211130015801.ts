export const sum = (arr: number[]): number => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

export const sort = (arr: number[]): number[] => {
  return arr.sort((a, b) => a - b);
};
