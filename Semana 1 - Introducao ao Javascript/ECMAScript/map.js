// const numeros = [2, 4, 5, 300, -1, 34];

// const numerosDobro = numeros.map((n) => {
//   return n * 2;
// });

// console.log(numeros);
// console.log(numerosDobro);

const nomes = ["Paula", "Pedro", "Guilherme", "Roberto", "Rodrigo"];
const sobreNomes = ["Silva", "Carvalho", "Almeida", "Oliveira", "Aparecida"];

const nomesCompleto = nomes.map((nome, i) => `${nome} ${sobreNomes[i]}`);

console.log(nomesCompleto);
