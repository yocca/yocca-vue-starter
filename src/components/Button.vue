<template>
	<button 
		class="button"
		@click="onClick">

		<slot class="center-xy">Button</slot>

	</button>
</template>

<script>
	export default {
		props: {
			onClick: {
				type: Function,
				required: true
			}
		}
	}
</script>

<style lang="scss">
.button {
	font-size: 100%;
}
</style>
