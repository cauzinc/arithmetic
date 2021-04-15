/**
 * 求数组的交集
 *
 * @description 给定两个数组，编写一个函数来计算它们的交集。
 * @returns {number[] 有交集的数组，顺序不限}
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2,2]
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[4,9]
 */

const cases = [
  { nums1: [1, 2, 2, 1], nums2: [2, 2] },
  { nums1: [4, 9, 5], nums2: [9, 4, 9, 8, 4] },
]

/**
 * 把其中一个数组存成map类型，然后遍历第二个数组进行查看
 * 如果在map里，就push到result中，并且出现次数-1
 * 时间复杂度为 O(n + m)
 */
const intersect = (nums1, nums2) => {
  const arrMap = new Map();
  const result = []

  for (let i = 0; i < nums1.length; i++) {
    if (arrMap.get(nums1[i])) {
      arrMap.set(nums1[i], arrMap.get(nums1[i]) + 1)
    } else {
      arrMap.set(nums1[i], 1)
    }
  }
  for (let j = 0; j < nums2.length; j++) {
    if (arrMap.get(nums2[j])) {
      result.push(nums2[j])
      arrMap.set(nums2[j], arrMap.get(nums2[j]) - 1)
    }
  }
  return result
};

function test() {
  cases.forEach((item, index) => {
    const result = intersect(item.nums1, item.nums2)
    console.log(`running case ${index + 1}: ${result} - ${item}`)
    console.log('----------------------------')
  })
}

test()
