<script setup>
const props = defineProps(['resultadoTemp', 'resetEventLog']);
</script>

<template>
	<p class="fs-2 text-center fw-bold">
		Resultado:
		<span class="">{{ props.resultadoTemp }}</span>
	</p>
	<div class="d-flex justify-content-around">
		<h2>Operações anteriores</h2>
		<button
			class="btn btn-primary mb-3"
			@click.prevent="
				{
					props.resetEventLog;
				}
			">
			Resetar
		</button>
	</div>
</template>
