// hàm findIndex thực thi 1 function cho mỗi array element
// findIndex trả về vị trí của phần tử đầu tiên thỏa mãn điều kiện
// nếu không có phần tử thỏa mãn rả về  -1
const ages = [3, 10, 18, 20]

Array.prototype.findIndexCustom = function (callback) {
  for (let i = 0; i < this.length; i++) {
    const isTrue = callback(this[i])
    if (isTrue) {
      return i
    }
  }
  return -1
}

const data = ages.findIndexCustom(function (element) {
  if (element > 18) {
    return true
  }
  return false
})

console.log(data)
