const camisaLacoste = {
    descricao: "Camiseta Lacouste",
    preco: 359.99,
    tamanho: "G",
    cor: "Amarelo",
    presente: true
}

const {descricao,preco} = camisaLacoste;
const {presente} = camisaLacoste;

console.log("PRODUTO:");
console.log(`

            Descrição: ${descricao}
            Preço: ${preco}
            Presente: ${presente ? "sim" : "não"}

`);

//desafio array de objetos 

