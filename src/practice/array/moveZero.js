/**
 * 移动零
 *
 * @description 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * @returns {number[] 有交集的数组，顺序不限}
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 必须在原数组上操作，不要拷贝新的数组；尽量减少操作次数
 */

const cases = [
  [0, 1, 0, 3, 12],
]

/**
 * 记录出现的0次数，遍历时，移动当前位置的数字到 zeroCount 前
 * 时间复杂度为 O(n)，空间复杂度为 O(1)
 */
const moveZero = (nums) => {
  let zeroCount = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++
    } else if (zeroCount > 0) {
      const temp = nums[i]
      nums[i] = 0
      nums[i - zeroCount] = temp
    }
  }
  return nums
};

function test() {
  cases.forEach((item, index) => {
    const result = moveZero(item)
    console.log(`running case ${index + 1}: ${result} - ${item}`)
    console.log('----------------------------')
  })
}

test()
