/**
 * 旋转数组 https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2skh7/
 *
 * @description 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数, 必须是原地排序。
 * @returns {number[] 旋转后的数组}
 */

// 循环的时候移动数组每一位，复杂度O(n * k)
export function rotateV1(nums, k) {
  const len = nums.length
  const offset = k % len
  for (let i = 0; i < offset; i++) {
    const temp = nums[len - 1]
    for (let j = len - 1; j >= 0; j--) {
      if (j === 0) {
        nums[j] = temp
      } else {
        nums[j] = nums[j - 1]
      }
    }
  }
  return nums
}

/**
 * 循环每个元素，找到其对应的新位置。复杂度O(n - k)
 * @todo 有bug
 * */
export default function rotateV2(nums, k) {
  const len = nums.length
  const offset = k % len
  let pos = 0
  let temp = nums[0]
  const loop = (init = 0) => {
    do {
      const nextIdx = (pos + offset) % len
      const temp2 = nums[nextIdx]
      nums[nextIdx] = temp
      temp = temp2
      pos = nextIdx
    } while (pos !== init)
  }
  // if (len % 2 === 0 && k % 2 === 0) {
  if (len % offset === 0) {
    for (let i = 0; i < offset; i++) {
      pos = i
      temp = nums[i]
      loop(i)
    }
  } else {
    loop(0)
  }

  return nums
}

/**
 * 先把offset前面的数字移动到后面，然后再把offset后面的数字移动到前面
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 * */
export function rotateV3(nums, k) {
  const len = nums.length
  const offset = k % len
  const tailArr = nums.slice(len - offset)
  const headArr = nums.slice(0, len - offset)
  for (let i = 0; i < len; i++) {
    if (i < offset) {
      nums[i] = tailArr[i]
    } else {
      nums[i] = headArr[i - offset]
    }
  }
  return nums
}

const cases = [
  { params: [1, 2, 3, 4, 5, 6, 7], k: 3, answer: [5, 6, 7, 1, 2, 3, 4] },
  { params: [-1, -100, 3, 99], k: 2, answer: [3, 99, -1, -100] },
  { params: [1, 2, 3, 4, 5, 6], k: 3, answer: [4, 5, 6, 1, 2, 3] },
  { params: [1, 2, 3, 4, 5, 6], k: 4, answer: [3, 4, 5, 6, 1, 2] },
]

function test() {
  cases.forEach((i) => {
    console.log(rotateV3(i.params, i.k), i.answer)
  })
}

test()
