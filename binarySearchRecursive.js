const data = [
  {
    id: 1,
    name: "Alice"
  },
  {
    id: 7,
    name: "Bob"
  },
  {
    id: 11,
    name: "Charlie"
  }
];

const binarySearch = (array, id) => {
  return binarySearchRecursive(array, id, 0, array.length);
};

const binarySearchRecursive = (array, id, low, high) => {
  if (low > high) {
    return null;
  }
  const middle = Math.floor((low + high) / 2);
  const midItem = array[middle];
  if (midItem.id === id) {
    return midItem;
  } else if (midItem.id < id) {
    return binarySearchRecursive(array, id, middle + 1, high);
  } else {
    return binarySearchRecursive(array, id, low, middle - 1);
  }
};

module.exports = binarySearch;
