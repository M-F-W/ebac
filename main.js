function Animal(tipo) {
	this.tipo = tipo;
}

function Gato(nome, tipo) {
	this.nome = nome;
	Animal.call(tipo);
	const mia = function () {
		console.log('Miau');
	};
}

function Cachorro(nome, tipo) {
	this.nome = nome;
	Animal.call(tipo);
	const mia = function () {
		console.log('Au au');
	};
}

function Barata(nome, tipo) {
	this.nome = nome;
	Animal.call(tipo);
}

const gato = new Gato('Lulu', 'Mamifêro');
const cachorro = new Cachorro('Luke', 'Mamifêro');
const barata = new Barata('Mingu', 'Inseto');
