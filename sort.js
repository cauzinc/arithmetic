/**
 * 复杂度 O(n^2) 的排序算法
 * 1. 冒泡排序
 * 2. 选择排序
 * 3. 插入排序
 *  */ 


//  冒泡排序
function bubbleSort (arr) {
  let sorted = false  // 是否排序完成的标志符
  if (arr.length < 2) {
    return arr
  }
  while (!sorted) {
    sorted = true
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        sorted = false
      }
    }
  }
  return arr
}

function test () {
  const length = 100
  let testData = []
  for (let i = 0; i < length; i++) {
    testData.push(Math.floor(Math.random() * 100))
  } 
  console.log('before sort', testData)
  console.log('------------')
  console.log('bubble sort', bubbleSort(testData))
}

test()
