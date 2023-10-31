const numeros = [2, 4, 5];

const soma = numeros.reduce((total, n) => total + n, 0);

console.log(soma);

const produtos = [
  { produto: "camisa1", preco: 40.0 },
  { produto: "camisa2", preco: 40.0 },
  { produto: "camisa3", preco: 60.0 },
];

let totProduto = produtos.reduce((vlinicial, oP) => {
  return vlinicial + oP;
}, 0);
