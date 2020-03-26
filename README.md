# Binary Search Algorithm

## Introduction

Create a binary search function that goes through an array of data and return selected object.

## Mock Data

const data = [
{
id: 1,
name: 'Alice',
},
{
id: 7,
name: 'Bob',
},
{
id: 11,
name: 'Charlie',
},
];

## Starting Test

describe('binary search by sorted id', () => {
it('returns the element found', () => {
expect(binarySearch(data, data[1].id)).toEqual(data[1]);
});
