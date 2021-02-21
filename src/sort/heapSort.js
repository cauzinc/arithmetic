/**
 * 复杂度为 O(N * log(N)) 的排序算法
 * 堆排序
 * heap: 完全二叉树，并且根节点总是比子节点大
 */

/**
 * array => heap
 * @param arr number[]
 * @return heap number[]
 */
function makeHeap (arr) {
  // 构建堆的核心在于交换子节点和父节点的位置，直到父节点总是大于子节点
  for(let i = 0; i < arr.length; i++) {
    let crtIndex = i
    let parent = crtIndex
    while (parent !== 0) {
      parent = Math.floor((crtIndex - 1) / 2)
      if (arr[parent] < arr[crtIndex]) {
        // 交换位置
        let temp = arr[parent]
        arr[parent] = arr[crtIndex]
        arr[crtIndex] = temp
        crtIndex = parent
      } else {
        break // 不用每一次都回溯到最上层
      }
    }
    
  }
  return arr
}

function test () {
  let testData = []
  let length = 13
  for(let i = 0; i < length; i++) {
    testData.push(Math.floor(Math.random() * 100))
  }
  console.log('before', testData)
  console.log('------------------------')
  console.log(makeHeap(testData))
}

test()