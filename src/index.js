
module.exports = function towelSort (matrix) {
  let result = [];
  let j = 0;
  for (let i in matrix) {
      if (i % 2 == 0) {
          result[i] = matrix[i];
      } else {
          result[i] = matrix[i].reverse();
      }
  }
  console.log([].concat(...result));
  return [].concat(...result);
}
