// import 'should'
import heapSort from '../src/sort/heapSort';

describe('heap sort test', () => {
  const randomArr = [3, 11, 20, 15, 6, 8, 12];
  it('return sorted arr', () => {
    heapSort(randomArr).should.be.eql([3, 6, 8, 11, 12, 15, 20]);
    // test().should.be.eql('hello mocha')
  });
});
