type arr = {
  [index: number | string]: number | string | boolean;
};
export const sum = (arr: arr[], key: string): number => {
  const newArr = arr.map(({ key, ...rest }) => ({ ...rest }));
  if (!newArr.length) return 0;
  return newArr.reduce((acc, curr) => acc + Number(curr[key]), 0);
};

export const sort = (arr: arr[], key: string, order: "asc" | "desc"): arr[] => {
  let sorted = arr.sort((a, b) =>
    a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0
  );
  if (order === "desc") return sorted.reverse();
  return sorted;
};

export const randomNumber = (a: number, b: number) => {
  return Math.floor(Math.random() * (b - a + 1)) + a;
};
