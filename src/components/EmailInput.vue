<template>
	<div class="input-bg email-input">
	  <input
		v-bind:email="email"
		v-on:input="updateEmail($event.target.value)"
		class="xenois-sans-10"
		type="email"
		placeholder="Email">
	</div>
</template>

<script>
	export default {
		props: ['email'],
		methods: {
			updateEmail(email) {
				this.$emit('update:email', email);
			}
		}
	}
</script>

<style lang="scss">
.email-input {
}
</style>
