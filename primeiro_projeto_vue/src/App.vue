<script setup>
import { reactive } from 'vue';

const sum = (valorA, valorB) => {
	return parseInt(valorA) + parseInt(valorB);
};
const sub = (valorA, valorB) => {
	return parseInt(valorA) - parseInt(valorB);
};
const mult = (valorA, valorB) => {
	return parseInt(valorA) * parseInt(valorB);
};
const div = (valorA, valorB) => {
	return parseInt(valorA) / parseInt(valorB);
};

const showList = () => {
	if ((eventLog.logs.length = '1')) {
		return '';
	} else {
		return '1';
	}
};
const resetEventLog = () => {
	alert(eventLog.logs.length);
	eventLog.logs = [{}];
};

const calcRes = () => {
	switch (eventLog.operacaoTemp) {
		case '+':
			eventLog.resultadoTemp = sum(
				eventLog.valorATemp,
				eventLog.valorBTemp
			);
			return eventLog.resultadoTemp;
		case '-':
			eventLog.resultadoTemp = sub(
				eventLog.valorATemp,
				eventLog.valorBTemp
			);
			return eventLog.resultadoTemp;
		case 'x':
			eventLog.resultadoTemp = mult(
				eventLog.valorATemp,
				eventLog.valorBTemp
			);
			return eventLog.resultadoTemp;
		case '/':
			eventLog.resultadoTemp = div(
				eventLog.valorATemp,
				eventLog.valorBTemp
			);
			return eventLog.resultadoTemp;
	}
	console.log(eventLog.operacaoTemp);
};

const addLog = () => {
	const newLog = {
		valorA: eventLog.valorATemp,
		valorB: eventLog.valorBTemp,
		operacao: eventLog.operacaoTemp,
		resultado: calcRes(),
	};
	eventLog.logs.push(newLog);
};
const eventLog = reactive({
	valorATemp: '',
	valorBTemp: '',
	operacaoTemp: '+',
	resultadoTemp: '',

	logs: [{}],
});
</script>

<template>
	<div class="container">
		<header class="p-5 mt-5 bg-light rounded-3">
			<h1 class="text-center">Calculadora</h1>
			<h3 class="text-center">Aritmética</h3>
		</header>
		<form
			class="d-flex justify-content-around align-items-center"
			@submit.prevent="addLog"
			action="">
			<input
				type="number"
				@change="
					(newNumber) =>
						(eventLog.valorATemp = newNumber.target.value)
				" />
			<span>{{ eventLog.operacaoTemp }}</span>
			<input
				type="number"
				@change="
					(newNumber) =>
						(eventLog.valorBTemp = newNumber.target.value)
				" />
			<select
				@change="
					(selected) =>
						(eventLog.operacaoTemp =
							selected.target.value)
				"
				name="#"
				id="">
				<option value="+">Adição</option>
				<option value="-">Subtração</option>
				<option value="x">Multiplicação</option>
				<option value="/">Divisão</option>
			</select>
			<button
				class="btn btn-primary"
				type="submit">
				Calcular
			</button>
		</form>
		<p class="fs-2 text-center fw-bold">
			Resultado:
			<span class="">{{ eventLog.resultadoTemp }}</span>
		</p>
		<div class="d-flex justify-content-around">
			<h2>Operações anteriores</h2>
			<button
				class="btn btn-primary mb-3"
				@click.prevent="
					{
						resetEventLog();
					}
				">
				Resetar
			</button>
		</div>
		<ul
			class="list-group"
			v-show="true">
			<li
				class="list-group-item"
				v-for="logs in eventLog.logs">
				<span
					>{{ logs.valorA }}
					{{ logs.operacao }}
					{{ logs.valorB }} =
					{{ logs.resultado }}
				</span>
			</li>
		</ul>
	</div>
</template>

<style scoped>
.hidden {
	display: none;
}
.show {
	display: true;
}
</style>
