const alunosNotas = [
	{
		nome: 'João',
		nota: 10,
	},
	{
		nome: 'Maria',
		nota: 8,
	},
	{
		nome: 'Pedro',
		nota: 3,
	},
	{
		nome: 'Fernanda',
		nota: 4,
	},
	{
		nome: 'Letícia',
		nota: 9,
	},
];

function maiorQueSeis(aluno) {
	if (aluno.nota >= 6) {
		console.log(
			`O/A ${aluno.nome} tirou uma nota de ${aluno.nota} e ficou acima da média 6`
		);
	} else {
		console.log(
			`O/A ${aluno.nome} tirou uma nota de ${aluno.nota} e ficou abaixo da média 6`
		);
	}
}

alunosNotas.forEach(maiorQueSeis);
