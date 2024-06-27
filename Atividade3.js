const arr = [1, 3, 5, 7, 8, 2, 4, 6, 9, 0];

let soma = 0;

for (let i = 0; i < arr.length; i++) {
  soma = arr[i] + soma;
}
console.log(soma);
