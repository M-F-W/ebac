const form = document.getElementById("form-agenda");
let contatos = "";
const arrayContatos = [];
const arrayNumeros = [];
let linhas = "";
let numFoot = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  main();
});

function main() {
  adicionaContato();
  atualizaTabela();
}

function adicionaContato() {
  const inputNome = document.getElementById("inputNome");
  const inputNumero = document.getElementById("inputNumero");

  arrayContatos.push(inputNome.value);
  arrayNumeros.push(inputNumero.value);

  let linha = "";
  linha += "<tr>";
  linha += `<td>${inputNome.value}</td>`;
  linha += `<td>${inputNumero.value}</td>`;
  linha += "</tr>";

  linhas += linha;

  inputNome.value = "";
  inputNumero.value = "";

  numFoot = `<tr><td>Quantidade de contatos</td><td>${arrayContatos.length}</td></tr>`;
}

function atualizaTabela() {
  const bodyTable = document.querySelector("tbody");
  const bodyTableFoot = document.querySelector("tfoot");
  bodyTable.innerHTML = linhas;
  bodyTableFoot.innerHTML = numFoot;
}
