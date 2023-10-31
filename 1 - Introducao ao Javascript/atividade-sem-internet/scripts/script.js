let frutas = [
  {
    id: 1,
    nome: "abacate"
  },
  {
    id: 2,
    nome: "banana"
  },
  {
    id: 3,
    nome: "uva"
  }
];

function cadastrarFruta() {
  event.preventDefault();

  const novaFruta = new frutas();

  novaFruta.id = frutas.length + 1;

  novaFruta.nome = document.getElementById("inputFrutas").value;

  frutas.push(novaFruta);

  listarFrutas();
}

const listarFrutas = () => {
  frutas.sort();

  template = ``;

  const listaFrutas = document.getElementById("listaFrutas");

  frutas.forEach((fruta) => {
    template += `
    <li>${fruta}</li>
    `;

    listaFrutas.innerHTML = template;
  });
};
