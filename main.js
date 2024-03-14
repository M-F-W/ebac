// Método 1: Usando a linguagem 'natural' do js para chamar uma requisição do back-end

// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("btn-busca-cep").addEventListener("click", function () {
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById("cep").value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;

//         xhttp.open(`GET`, endpoint);
//         xhttp.send();
//     });
// });

//----------------------------------------------------------------------------------//
//Método 2: Usando o jquery e o ajax do jquery para realizar as solicitações

// $(document).ready(function () {
// 	$('#cep').mask('00000-000');

// 	$('#btn-busca-cep').click(function () {
// 		const cep = $('#cep').val();
// 		const endpoint = `https://viacep.com.br/ws/${cep}/json`;
// 		const button = $(this);
// 		$(button).find('i').addClass('d-none');
// 		$(button).find('i').removeClass('d-none');

// 		$.ajax(endpoint).done(function (answer) {
// 			const logradouro = answer.logradouro;
// 			const bairro = answer.bairro;
// 			const cidade = answer.localidade;
// 			const estado = answer.uf;
// 			const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
// 			$('#endereco').val(endereco);

// 			setTimeout(function () {
// 				$(button).find('i').addClass('d-none');
// 				$(button).find('i').removeClass('d-none');
// 			}, 4000);
// 		});
// 	});
// });

//----------------------------------------------------------------------------------//
//Método 3.1: Usando fetch. O fetch pode ser usado sem Jquery

//document.addEventListener('DOMContentLoaded', function () {
// document
// 	.getElementById('btn-busca-cep')
// 	.addEventListener('click', function () {
// 		const cep = document.getElementById('cep').value;
// 		const endpoint = `https://viacep.com.br/ws/${cep}/json`;

// 		fetch(endpoint)
// 			.then(function (answer) {
// 				return answer.json();
// 			})
// 			.then(function (json) {
// 				const bairro = json.bairro;
// 				const logradouro = json.logradouro;
// 				const cidade = json.localidade;
// 				const estado = json.uf;

// 				const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
// 				$('#endereco').val(endereco);

// 				setTimeout(function () {
// 					document
// 						.getElementById('btn-busca-cep')
// 						.find('i')
// 						.addClass('d-none');
// 					document
// 						.getElementById('btn-busca-cep')
// 						.find('i')
// 						.removeClass('d-none');
// 				}, 4000);
// 			});
// 	});
//});

//----------------------------------------------------------------------------------//
// Método 3.2: Usando Fetch com o Jquery

$(document).ready(function () {
	$(cep).mask('00000-000');

	$('#btn-busca-cep').click(function () {
		const cep = $('#cep').val();
		const endpoint = `https://viacep.com.br/ws/${cep}/json`;
		const button = $(this);
		$(button).find('i').addClass('d-none');
		$(button).find('span').removeClass('d-none');

		fetch(endpoint)
			.then(function (anwser) {
				return anwser.json();
			})
			.then(function (json) {
				const logradouro = json.logradouro;
				const bairro = json.bairro;
				const estado = json.uf;
				const cidade = json.localidade;

				const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
				$('#endereco').val(endereco);
			})
			.catch(function (erro) {
				alert(
					'Ocorreu um erro ao buscar o endereço, tente novamente mais tarde.'
				);
			})
			.finally(function () {
				setTimeout(function () {
					$(button).find('i').removeClass('d-none');
					$(button).find('span').addClass('d-none');
				}, 1000);
			});
	});
	$('#form-request').submit(function (event) {
		event.preventDefault();

		if ($('#nome').val().length == 0) {
			throw new Error('Digite o Nome');
		}
	});
});
