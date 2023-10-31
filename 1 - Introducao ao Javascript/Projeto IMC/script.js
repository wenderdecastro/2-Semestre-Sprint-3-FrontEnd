const listaPessoas = [];

function calcular() {
  event.preventDefault(); //capturar o evento de submit do formulário (para)

  // pegar os dados do form

  const nome = document.getElementById("nome").value.trim();
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);

  if (isNaN(altura) || isNaN(peso) || nome.length == 0) {
    alert("É necessário preecher os números corretamente");
    return;
  }

  // calcular o imc
  const imc = calcularImc(altura, peso);
  const situacao = retornaSituacao(imc);
  const dataCadastro = new Date();

  const dia = dataCadastro.getDate < 10 ? `0${dataCadastro.getDate}` : dataCadastro.getDate;
  const mes = dataCadastro.getMonth + 1;
  const ano = dataCadastro.getFullYear;


  const pessoa = { nome, imc, peso, altura, situacao, dataCadastro };

  listaPessoas.push(pessoa);

  console.log(pessoa);
  listarPessoas();
}

// return peso / altura ** 2;
//     return peso / (altura * altura);
function calcularImc(altura, peso) {
  return Math.floor(peso / Math.pow(altura, 2));
}

/*
    Resultado	        Situação
    Menor que 18.5      Magreza Severa
    Entre 18.5 e 24.99	Peso normal
    Entre 25 e 29.99	Acima do peso
    Entre 30 e 34.99	Obesidade I
    Entre 35 e 39.99	Obesidade II (severa)
    Acima de 40	        Cuidado!!! else
*/

function retornaSituacao(imc) {
  if (imc < 18.5) {
    return "Magreza Severa!";
  } else if (imc <= 24.99) {
    return "Peso normal";
  } else if (imc <= 29.99) {
    return "Acima do peso";
  } else if (imc <= 34.99) {
    return "Obesidade I";
  } else if (imc <= 39.99) {
    return "Obesidade II";
  } else {
    return "Obesidade III Cuidado!";
  }
}

function listarPessoas() {
  console.log(listaPessoas);

  const corpoTabela = document.getElementById("tabela-historico");

  let template = ``;

  listaPessoas.forEach((pessoa) => {
    template += `
    <tr>
        <td>${pessoa.nome}</td>
        <td>${pessoa.altura}</td>
        <td>${pessoa.peso}</td>
        <td>${pessoa.imc}</td>
        <td>${pessoa.situacao}</td>
        <td>${pessoa.dataCadastro}</td>
    </tr>
`;

    tabela.innerHTML = template;
  });

  listaPessoas.forEach((pessoa) => console.log(pessoa));
}

// https://github.com/MagiLogus/IMC

// https://github.com/juliaathar/imc-javascript
