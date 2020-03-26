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
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    const midItem = array[middle];
    if (id === midItem.id) {
      return array[middle];
    } else if (id > midItem.id) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return null;
};

module.exports = binarySearch;

console.log(binarySearch(data, data[0].id));
