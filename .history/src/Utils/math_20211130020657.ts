type arr = {
  [index: number | string]: number;
};
export const sum = (arr: arr[], key: string): number => {
  arr.map(() => {
    return arr.reduce((acc, curr) => acc + curr[key], 0);
  });
};

export const sort = (arr: number[]): number[] => {
  return arr.sort((a, b) => a - b);
};
