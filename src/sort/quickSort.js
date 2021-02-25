/**
 * 复杂度为 O(N * log(N)) 的排序算法
 * 快速排序
 */

 /**
  * @param {原数组} arr 
  * @param {左边界} l 
  * @param {右边界} r 
  * 用数组第一个数字作为基准数，然后左右双指针
  * 1. 先从右边开始移动指针，寻找比基准小的值，移动到左边
  * 2. 左边开始移动指针，寻找比基准大的值，移动到右边
  * 3. 直到左右指针重合，重合的位置就是基准数的位置
  * 4. 以这个重合位置index为界，然后左右两边递归执行该算法，直到数组排序完成
  */
export function quickSort (arr, l, r) {
  if (l < r) {
    let mid = arr[l]
    let i = l
    let j = r
    while (i < j) {
      while (i < j && arr[j] >= mid) {
        j--
      }
      arr[i] = arr[j]
      while (i < j && arr[i] < mid) {
        i++
      }
      arr[j] = arr[i]
    }
    arr[i] = mid
    quickSort(arr, l, i - 1)
    quickSort(arr, i + 1, r)
  }
  return arr
}

function test () {
  let testData = []
  let length = 21
  for(let i = 0; i < length; i++) {
    testData.push(Math.floor(Math.random() * 100))
  }
  console.log('before', testData)
  console.log('------------------------')
  console.log(quickSort(testData, 0, testData.length - 1))
}


test()