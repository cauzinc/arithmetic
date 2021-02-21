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
      // bubble: 每次冒泡都移动位置不对的元素
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

// 选择排序
function selectionSort (arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    let minValue = arr[i]
    for(let j = i + 1; j < arr.length - 1; j++) {
      // selection: 二次循环找到最小的元素, 和最前面的元素交换位置
      if (arr[j] < minValue) {
        minIndex = j
        minValue = arr[j]
      }
    }
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

// 插入排序
function insertionSort (arr) {
  for(let i = 1; i < arr.length - 1; i++) {
    for(let j = 0; j < i; j++) {
      // insertion：把当前元素插入到合适的位置
      if (arr[j] > arr[i]) {
        // 如果找到比当前元素大的值，则把该元素插到前面来
        let temp = arr[i]
        let temp2 = undefined
        arr[i] = arr[j]
        // 后面的元素要往后顺延一个位置
        for(let k = j + 1; k <= i; k++) {
          temp2 = arr[k]
          arr[k] = temp
          temp = temp2
        }
        break;
      }
    }
  }
  return arr
}

/**
 * 生成长度为100的随机数组
 *  */ 
function test () {
  const length = 100
  let testData = []
  for (let i = 0; i < length; i++) {
    testData.push(Math.floor(Math.random() * 100))
  } 
  console.log('before sort', testData)
  console.log('-----------------------')
  console.log('bubble sort', bubbleSort(testData))
  console.log('selection sort', selectionSort(testData))
  console.log('insertion sort', insertionSort(testData))
}

test()
