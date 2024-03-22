<script setup>
import { reactive } from 'vue';
import Header from './components/Header.vue';
import Form from './components/Form.vue';
import Result from './components/Result.vue';
import Logs from './components/Logs.vue';

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

const resetEventLog = () => {
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

const attValues = () => {
	eventLog.resultadoTemp = calcRes();
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
		<Header />
		<Form
			:add-log="addLog"
			:receive-value-a="
				(newNumber) =>
					(eventLog.valorATemp = newNumber.target.value)
			"
			:receive-value-b="
				(newNumber) =>
					(eventLog.valorBTemp = newNumber.target.value)
			"
			:att-values="attValues"
			:operacao-temp="eventLog.operacaoTemp"
			:receive-operacao="
				(selected) =>
					(eventLog.operacaoTemp = selected.target.value)
			" />
		<Result
			:resultado-temp="eventLog.resultadoTemp"
			:resetEventLog="resetEventLog" />
		<Logs :logs="eventLog.logs" />
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
