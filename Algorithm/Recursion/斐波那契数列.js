// 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：
// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
// 斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。


/**
 * @param n 需要计算的n
 * @param map 记录计算过的n，可以直接取
 */
// 递归调用，用map保存优化性能
var fib = function (n, map = new Map()) {
  if (n < 2)
    return n;
  if (map.has(n))
    return map.get(n);
  let first = fib(n - 1, map) % 1000000007;
  map.set(n - 1, first);
  let second = fib(n - 2, map) % 1000000007;
  map.set(n - 2, second);
  let res = (first + second) % 1000000007;
  map.set(n, res);
  return res;
};