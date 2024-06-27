const arr = [5, 2, 1, 2, 3, 4, 2, 5, 1, 6, 3, 6, 2, 1];

let verificacao;

for (let i = 0; i < arr.length; i++) {
  if (i != arr.indexOf(arr[i])) {
    arr.splice(i, i--);
  }
}
arr.sort();
console.log(arr);
