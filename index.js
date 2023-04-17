// xây dựng hàm find, find trả  về thằng đầu tiên thỏa mãn điều kiện,
// nếu k có thằng nào thỏa mãn trả về undefind
const arr = [5, 12, 8, 130, 44];
Array.prototype.findCustom = function (callback) {
  for (let item of this) {
    const isTrue = callback(item);
    if (isTrue) {
      return item;
    }
  }
  return undefined;
};

const data = arr.findCustom(function (element) {
  if (element > 10) {
    return true;
  }
  return false;
});

console.log('data', data);
