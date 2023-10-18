const mesa = [
  "Anna",
  "Demétrio",
  "Vinícius",
  "Luiz",
  "Lacerda",
  "Coral",
  "Evelyn",
];

/*

//callback functions
mesa.forEach(function Carlos(cadaPessoa) {
  console.log("Bom dia " + cadaPessoa);
});

//funcao anonima
mesa.forEach(function (cadaPessoa) {
  console.log("Bom dia " + cadaPessoa);
});

//arrow function
mesa.forEach((cadaPessoa) => {
  console.log("Bom dia " + cadaPessoa);
});

*/

//return inblock
const dobro = (x) => {
  return x * 2;
};

//return sem corpo, shortline
const dobro2 = (x) => x * 2;

//mais de um parametro
const multiplicar = (x, y) => x * y;

console.log(dobro(2), dobro2(4), multiplicar(5, 2));

() => console.log("arrow function simples");
/*************************************************************************************************/

