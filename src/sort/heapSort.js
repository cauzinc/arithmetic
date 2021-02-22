/**
 * 复杂度为 O(N * log(N)) 的排序算法
 * 堆排序
 * heap: 完全二叉树，并且根节点总是比子节点大
 */

/**
 * array => heap
 * @param arr number[]
 * @param end number 构建堆的终点
 * @return heap number[]
 * 复杂度 N * log(N)
 */
function makeHeap (arr, end) {
  // 构建堆的核心在于交换子节点和父节点的位置，直到父节点总是大于子节点
  for(let i = 0; i < end; i++) {
    let crtIndex = i
    let parent = crtIndex
    while (parent !== 0) {
      parent = Math.floor((crtIndex - 1) / 2)
      if (arr[parent] >= arr[crtIndex]) {
        break // 不用每一次都回溯到最上层
      }
      // 交换位置
      let temp = arr[parent]
      arr[parent] = arr[crtIndex]
      arr[crtIndex] = temp
      crtIndex = parent
    }
  }
  return arr
}

/** 
 * 堆排序
 * @param arr number[]
 */
export default function heapSort (arr) {
  let heap = makeHeap(arr, arr.length)
  for(let i = heap.length; i > 0; i--) {
    // 因为堆总是最大的值在上面，所以交换首位位置，即可把最大的值放到队尾
    let temp = heap[0]
    heap[0] = heap[i - 1]
    heap[i - 1] = temp
    // 交换位置后，数组就不再是堆了，要重新排列，重新排列时，忽略最后一位已经排序好的数字
    heap = makeHeap(heap, i - 1)
  }
  return heap
}


function makeHeapTest () {
  let testData = []
  let length = 9
  for(let i = 0; i < length; i++) {
    testData.push(Math.floor(Math.random() * 100))
  }
  console.log('before', testData)
  console.log('------------------------')
  console.log(makeHeap(testData, testData.length))
}

function test () {
  let testData = []
  let length = 9
  for(let i = 0; i < length; i++) {
    testData.push(Math.floor(Math.random() * 100))
  }
  console.log('before', testData)
  console.log('------------------------')
  console.log(heapSort(testData))
}

// makeHeapTest()
// test()
