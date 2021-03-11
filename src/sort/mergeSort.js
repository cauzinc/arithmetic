/**
 * 归并排序
 * 相对于快排和堆排序，是更加稳定的排序方式，缺点是占用更多内存
 */

/**
 * @param {原数组} arr
 */
export default function mergeSort(arr, l, r) {
  if (l === r) {
    return [arr[l]]
  }
  const result = []
  const mid = Math.floor((r + l - 1) / 2)
  const left = mergeSort(arr, l, mid)
  const right = mergeSort(arr, mid + 1, r)
  let i = 0
  let j = 0
  while (i < left.length || j < right.length) {
    if (i >= left.length || left[i] >= right[j]) {
      result.push(right[j]);
      j++;
    } else if (j >= right.length || left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    }
  }
  return result
}

function generateArr(len = 20) {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

function test () {
  // let arr = generateArr()
  let arr = [
    45, 74, 64, 25, 80, 34, 15,
    11, 40, 35, 92, 63, 82, 90,
     3, 72, 40, 28, 57,  9]
  console.log('before', arr)
  console.log(mergeSort(arr, 0, arr.length - 1))
}

test()
