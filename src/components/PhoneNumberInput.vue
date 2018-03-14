<template>
	<div class="input-bg">
		<input 
	  		v-bind:phoneNumber="phoneNumber"	
	  		v-on:input="updatePhoneNumber($event.target.value)"
			class="xenois-sans-10" 
			type="text" 
			placeholder="(000)-000-0000">
	</div>
</template>

<script>
	export default {
		props: ['phoneNumber'],
		methods: {
			updatePhoneNumber(phoneNumber) {
				this.$emit('update:phoneNumber', phoneNumber);
			}
		}
	}
</script>

<style lang="scss">
</style>
