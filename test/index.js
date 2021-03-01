// import 'should'
import heapSort from '../src/sort/heapSort.js';
import quickSort from '../src/sort/quickSort.js';
import { bubbleSort } from '../src/sort/sort.js';

function generateArr(len = 20) {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

describe('heap sort test', () => {
  it('堆排序', () => {
    const randomArr = generateArr();
    heapSort(randomArr).should.be.eql(bubbleSort(randomArr));
  });
  it('快速排序', () => {
    const randomArr = generateArr();
    quickSort(randomArr).should.be.eql(bubbleSort(randomArr));
  });
});
