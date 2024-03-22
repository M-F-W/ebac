<script setup>
const props = defineProps(['logs']);
</script>

<template>
	<ul
		class="list-group"
		v-show="true">
		<li
			class="list-group-item"
			v-for="logger in props.logs">
			<span
				>{{ logger.valorA }}
				{{ logger.operacao }}
				{{ logger.valorB }} =
				{{ logger.resultado }}
			</span>
		</li>
	</ul>
</template>
