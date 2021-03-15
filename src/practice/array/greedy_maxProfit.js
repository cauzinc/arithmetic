/**
 * 买卖股票的最佳时机 https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2zsx1/
 *
 * @description 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * @returns {number 炒股获得的利润}
 */

/**
 * 我们只要知道这个股票所有上涨的利润，就是这个股票的总利润
 * 假设一支股票连续上涨，每天的价格是 a b c d，那么利润就是 （b - a）+ (c - b) + (d - c) = d - a
 * 所以我们只要用后一天的价格减去前一天的价格，只要是是上涨的，就是我们的股票利润
 * [7, 1, 5, 3, 6, 4]
 * [-6, 4, -2, 3, -2]
 * 可以得出利润为7
 * */
export default function maxProfit(prices) {
  let profit = 0
  for (let i = 0; i < prices.length - 1; i++) {
    const balance = prices[i + 1] - prices[i]
    if (balance > 0) profit += balance
  }
  return profit
}

const cases = [
  { params: [7, 1, 5, 3, 6, 4], answer: 7 },
  { params: [7, 6, 4, 3, 1], answer: 0 },
  { params: [1, 2, 3, 4, 5], answer: 4 },
]

function test() {
  cases.forEach((i) => {
    console.log(maxProfit(i.params), i.answer)
  })
}

test()
