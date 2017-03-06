<template lang="html">

</template>

<script>
export default {
	data () {
		return {
			directions: ['ns', 'ew', 'nwse', 'wsen'],
			direction: 'ns',
			time: 3000
		}
	},
	mounted () {
		if (lightTimer) lightTimer.clearTimeout()
		let lightTimer = setTimeout(function timer () {
			this.changeTrafficDirection()
			setTimeout(timer.bind(this), this.time)
		}.bind(this), this.time)
	},
	methods: {
		changeTrafficDirection: function () {
			let index = this.directions.indexOf(this.direction) + 1
			if (index >= this.directions.length) index = 0
			this.direction = this.directions[index]
			console.log('changing to: ', this.direction)
			this.events.$emit('direction', this.direction)
			store.direction = this.direction
		}
	}
}
</script>

<style lang="css">
</style>
