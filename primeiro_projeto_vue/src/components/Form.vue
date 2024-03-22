<script setup>
const props = defineProps([
	'addLog',
	'receiveValueA',
	'receiveValueB',
	'attValues',
	'operacaoTemp',
	'receiveOperacao',
]);
</script>

<template>
	<form
		class="d-flex justify-content-around align-items-center"
		@submit.prevent="props.addLog"
		action="">
		<input
			type="number"
			@keyup="props.receiveValueA"
			@change="props.attValues" />
		<span class="fs-1">{{ props.operacaoTemp }}</span>
		<input
			type="number"
			@keyup="props.receiveValueB"
			@change="props.attValues" />
		<select
			@change="props.receiveOperacao"
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
			Registrar
		</button>
	</form>
</template>
