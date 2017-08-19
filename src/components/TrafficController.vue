<template lang="html">

</template>

<script>
export default {
	props: ['time'],
	data () {
		return {
			directions: ['ns', 'nwse', 'ew', 'wsen'],
			direction: 'ns',
			lightTimer: undefined
		}
	},
	mounted () {
		this.setTimer()
	},
	methods: {
		changeTrafficDirection (newDirection) {
			if (newDirection && this.directions.indexOf(newDirection) >= 0) {
				this.direction = newDirection
				this.$emit('direction', this.direction)
				return
			}
			let index = this.directions.indexOf(this.direction) + 1
			if (index >= this.directions.length) index = 0
			this.direction = this.directions[index]
			console.log('changing to: ', this.direction)
			this.$emit('direction', this.direction)
		},
		setTimer () {
			if (this.lightTimer) this.lightTimer.clearTimeout()
			this.lightTimer = setTimeout(function timer () {
				this.changeTrafficDirection()
				setTimeout(timer.bind(this), this.time)
			}.bind(this), this.time)
		}
	}
}
</script>

<style lang="css">
</style>
