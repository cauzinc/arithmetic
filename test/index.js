// import 'should'
import heapSort from '../src/sort/heapSort.js';
import { bubbleSort } from '../src/sort/sort.js';

function generateArr(len = 20) {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

describe('heap sort test', () => {
  const randomArr = generateArr();
  it('堆排序', () => {
    heapSort(randomArr).should.be.eql(bubbleSort(randomArr));
  });
});
