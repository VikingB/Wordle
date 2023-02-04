export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const getUniqueItemsByProperties = (items, propNames) => {
  const propNamesArray = Array.from(propNames);

  return items.filter((item, index, array) =>
    index === array.findIndex(foundItem => isPropValuesEqual(foundItem, item, propNamesArray))
  );
};

const isPropValuesEqual = (subject, target, propNames) =>
  propNames.every(propName => subject[propName] === target[propName]);

