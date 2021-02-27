// 你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。
// 返回的长度需要从小到大排列。

var divingBoard = function (shorter, longer, k) {
  if (!k) return [] // 判空
  if (shorter == longer) return [shorter * k] // 短板和长版相等，结果只存在一种
  var dfs = function (shorter, longer, k, i, res) {// 递归
    if (i > k) return res;// 执行k+1
    res.push(i * longer + (k - i) * shorter);
    return dfs(shorter, longer, k, i + 1, res);
  }
  return dfs(shorter, longer, k, 0, []);
}