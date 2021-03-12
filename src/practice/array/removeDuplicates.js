/**
 * 删除数组中的重复项目
 *
 * @description 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * @returns {length 新的数组的长度}
 */

const cases = [
  [1, 1, 2],
  [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
]

// 暴力破解法--O(n)
function removeDuplicatesV1(nums) {
  let i = 0
  let indicator = nums[i]
  while (i < nums.length) {
    if (nums[i + 1] === indicator) {
      nums.splice(i + 1, 1)
    } else {
      indicator = nums[i + 1]
      i++
    }
    console.log('on loop', i, nums)
  }
  return nums.length
}

function test() {
  cases.forEach((nums, index) => {
    const len = removeDuplicatesV1(nums)
    console.log(`running case ${index + 1}: ${len} - ${nums}`)
    console.log('----------------------------')
  })
}

test()
