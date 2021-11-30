type arr = {
  [index: number | string]: number | string | boolean;
};
export const sum = (arr: arr[], key: string): number => {
  const newArr = arr.map(({ key, ...rest }) => ({ ...rest }));
  if (!newArr.length) return 0;
  return newArr.reduce((acc, curr) => acc + Number(curr[key]), 0);
};

export const sort = (arr: number[]): number[] => {
  return arr.sort((a, b) => a - b);
};
