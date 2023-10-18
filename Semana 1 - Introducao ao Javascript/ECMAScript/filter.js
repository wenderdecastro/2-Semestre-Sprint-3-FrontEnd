const numeros = [2, 4, 5, 300, -1, 34];

const nMenor10 = numeros.filter((n) => n < 10);

console.log(nMenor10);

const comentarios = [
  { comentario: "coment1", exibir: true },
  { comentario: "coment2", exibir: true },
  { comentario: "coment3", exibir: false },
];

const verificaComentario = comentarios.filter(() => {return c.exibe === true})