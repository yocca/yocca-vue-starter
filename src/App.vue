<template>
	<div class="app">
		<MyComponent
			:name="myName"
			class="my-component-bg">
		</MyComponent>
	</div>
</template>

<script>
	import MyComponent from 'Components/MyComponent.vue';
	export default {
		components: {
			MyComponent
		},
		data() {
			return {
				myName: 'Andrew'
			}
		}
	}
</script>

<style lang="scss">
.app {
	.my-component-bg {
	}
}
</style>
