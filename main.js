function Inversor(potencia) {
	let _potencia = potencia;
	let _numMppts = 4;

	this.getPotenciaInv = function () {
		return _potencia;
	};

	this.getNumMppts = function () {
		return _numMppts;
	};
}

function Modulo(potencia) {
	let _potencia = potencia;
	let _tensao = 49;
	let _corrente = 13;

	this.getPotenciaModulo = function () {
		return _potencia;
	};

	this.getTensao = function () {
		return _tensao;
	};

	this.getCorrente = function () {
		return _corrente;
	};
}

function SistemaSolar(
	cliente,
	endereco,
	invPotencia,
	moduloPotencia
) {
	this.cliente = cliente;
	this.endereco = endereco;

	Inversor.call(this, invPotencia);
	Modulo.call(this, moduloPotencia);
}

const valdomiro = new SistemaSolar(
	'Valdomiro',
	'Rua dos bobos, 1234',
	12,
	0.55
);

const fernanda = new SistemaSolar(
	'Fernanda',
	'Rua LogoAli, 4321',
	6,
	0.46
);

const indCeramicasPolo = new SistemaSolar(
	'Leandro',
	'Rua de Agoraporã, 1919',
	20,
	0.575
);

console.log(valdomiro.cliente);
console.log(valdomiro.endereco);
valdomiro.endereco = 'Rua Nova,3232';
console.log(valdomiro.endereco);
console.log(valdomiro.getTensao());

console.log(fernanda.cliente);
console.log(fernanda.getPotenciaInv());
console.log(fernanda.getPotenciaModulo());

console.log(indCeramicasPolo.cliente);
console.log(indCeramicasPolo.getNumMppts());
console.log(indCeramicasPolo.getCorrente());
