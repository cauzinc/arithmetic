/**
 * 归并排序
 * 相对于快排和堆排序，是更加稳定的排序方式，缺点是占用更多内存
 */

/**
 * @param {原数组} arr
 */
export default function mergeSort(arr, l, r) {
  if (l === r) {
    return arr
  }
  const result = []
  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr, l, mid)
  const right = mergeSort(arr, mid, r)
  let i = 0
  let j = 0
  while (i < left.length || j < right.length) {
    if (i >= left.length || left[i] > right[j]) {
      result.push(right[j]);
      j++;
    } else if (j >= right.length || left[i] < right[j]) {
      result.push(left[i]);
      i++;
    }
  }
  return result
}
