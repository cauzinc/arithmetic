/**
 * 只出现一次的数字
 *
 * @description 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 线性时间复杂度。 不使用额外空间来实现
 * @returns {number 没有重复出现的元素}
 */

/**
 * 使用位运算来搞定这题, 理解下面几个规则
 * a ^ a = 0
 * 0 ^ b = b
 * a ^ b ^ a = 0 ^ b
 * [a, c, a, c, b] =》 0 ^ a ^ c ^ a ^ c ^ b = 0 ^ b
 * */
export default function singleNumber(nums) {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i]
  }
  return result
}
