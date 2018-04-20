<template>
	<div class="app">
		<MyComponent :name="$store.state.myName"></MyComponent>
	</div>
</template>

<script>
	import MyComponent from 'Components/MyComponent'
	export default {
		components: {
			MyComponent
		}
	}
</script>

<style lang="scss">
.app {
}
</style>
