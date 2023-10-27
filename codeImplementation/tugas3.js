//cek number dan sort

let divideAndSort = (num) => {
  return num
    .toString()
    .split(0)
    .map((item) => item.split("").sort().join(""))
    .join("");
};

console.log(divideAndSort(5956560159466056));
