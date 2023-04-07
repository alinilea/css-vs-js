export const capitalizeFirstLetter = (str) => {
  if (!str) return "";

  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};

export const capitalizeString = (str) => {
  if (!str) return "";

  return str
    .split(" ")
    .map((item) => `${item[0].toUpperCase()}${item.slice(1)}`)
    .join(" ");
};
