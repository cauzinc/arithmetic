/**
 * 删除数组中的重复项目
 *
 * @description 给定一个排序好的数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * @returns {length 新的数组的长度}
 */

const cases = [
  [1, 1, 2],
  [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
]

/**
 * 暴力破解法--O(n)
 * 遍历数组，检查到相同的数字就进行删除, 最后得到最终的数组是删减过后的
 * */
export function removeDuplicatesV1(nums) {
  let i = 0
  let indicator = nums[i]
  while (i < nums.length) {
    if (nums[i + 1] === indicator) {
      nums.splice(i + 1, 1)
    } else {
      indicator = nums[i + 1]
      i++
    }
  }
  return nums.length
}

/**
 *  双指针法_2--O(n)
 *  遍历数组，如果发现不同的数字就把这个数字放到数组的前端，直到遍历完成
 *  这里要用一个指针来标志替换位置，一个指针来遍历数组
 *  这里最终返回的数组可能是 [1, 2, 3, 5, 2, 2, 3, 5] 这样的，如果需要删除多余元素再进行slice即可
*/
function removeDuplicatesV2(nums) {
  let i = 0
  let j = 0
  let indicator = nums[i]
  while (j < nums.length - 1) {
    if (nums[j + 1] !== indicator) {
      nums[i + 1] = nums[j + 1]
      indicator = nums[j + 1]
      i++
    }
    j++
  }
  return i + 1
}

function test() {
  cases.forEach((nums, index) => {
    // const len = removeDuplicatesV1(nums)
    const len = removeDuplicatesV2(nums)
    console.log(`running case ${index + 1}: ${len} - ${nums}`)
    console.log('----------------------------')
  })
}

test()
