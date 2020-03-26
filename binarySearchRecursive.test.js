const binarySearch = require("./binarySearchRecursive");

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

describe("binary search by sorted id", () => {
  it("returns the element found", () => {
    expect(binarySearch(data, data[1].id)).toEqual(data[1]);
  });

  it("returns the first element found", () => {
    expect(binarySearch(data, data[0].id)).toEqual(data[0]);
  });

  it("returns the last element found", () => {
    expect(binarySearch(data, data[2].id)).toEqual(data[2]);
  });

  it("returns null when no element found", () => {
    expect(binarySearch(data, 8)).toEqual(null);
  });
});
