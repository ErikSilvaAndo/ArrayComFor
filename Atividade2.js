let arrstrings = [];
let arrnumbers = [];

const arr = [
  "Kairi",
  24,
  "Henrik",
  35,
  8,
  102,
  "Makenna",
  "Armani",
  7,
  "Zole",
  64,
  2,
  4,
  "Nathanael",
  "Elina",
  5,
  "Grady",
  32,
  1,
  "Cora",
  23,
  "Jayce",
  5,
  "Mya",
  55,
  "Bjorn",
  40,
];

for (i = 0; i < arr.length; i++) {
  const arrElemento = arr[i];
  const arrTipo = typeof arrElemento;
  if (arrTipo === "number") {
    arrnumbers.push(arrElemento);
  } else if (arrTipo === "string") arrstrings.push(arrElemento);
}
console.log(arrnumbers);
console.log(arrstrings);
