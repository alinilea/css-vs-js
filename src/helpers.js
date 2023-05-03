export const capitalizeFirstLetter = (str) => {
  if (!str) return '';

  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};

export const capitalizeEachWord = (str) => {
  if (!str) return '';

  return str
    .split(' ')
    .map((item) => capitalizeFirstLetter(item))
    .join(' ');
};
