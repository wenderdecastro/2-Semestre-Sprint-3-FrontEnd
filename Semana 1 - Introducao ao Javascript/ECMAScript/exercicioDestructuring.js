//exercicio

//criar uma desestruturação para um objeto chamado "filmes", trazer somente, 3 propriedades

const filmes = [
  {
    nomeFilme: "Javascript o Filme",
    anoLancamento: new Date(),
    avaliacao: 3,
    genero: "Terror",
    duracao: "2h30",
  },
  {
    nomeFilme: "C# o Filme",
    anoLancamento: new Date(),
    avaliacao: 5,
    genero: "Comedia",
    duracao: "1h30",
  },
];

filmes.forEach((filme) => {
  const { nomeFilme, duracao, avaliacao } = filme;

  console.log(`
    ${nomeFilme}
    Duração: ${duracao} 
    ${avaliacao} Estrelas
`);
});

filmes.forEach(({nomeFilme, duracao, avaliacao}, i) => {
  console.log(`
    ${i + 1}. ${nomeFilme}
    Duração: ${duracao} 
    ${avaliacao} Estrelas
`);
});
