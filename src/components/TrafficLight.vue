<template lang="html">
	<div class="light-wrap">
		<slot></slot>
		<div class="light" :class="color" v-on:direction="changeColor"></div>
	</div>
</template>

<script>
export default {
	props: ['direction', 'yellowDelay', 'greenDelay'],
	name: 'TrafficLight',
	data: function () {
		return {
			colors: [ 'red', 'yellow', 'green' ],
			color: this.direction === 'ns' ? 'green' : 'red',
			prevDirection: 'ns'
		}
	},
	methods: {
		getColor () {},
		changeDirection (dir) {
			if (dir === this.direction || this.prevDirection === this.direction) this.changeColor()
			this.prevDirection = dir
		},
		changeColor () {
			switch (this.color) {
			case 'red':
				setTimeout(function () {
					this.color = 'green'
				}.bind(this), this.yellowDelay + this.greenDelay)
				break
			case 'yellow':
				this.color = 'red'
				break
			case 'green':
				this.color = 'yellow'
				setTimeout(function () {
					this.changeColor()
				}.bind(this), this.yellowDelay)
				break
			default:
				this.color = 'red'
			}
		}
	},
	created () {
		this.events.$on('direction', this.changeDirection)
	}
}
</script>

<style lang="css">
	.light-wrap { float:left; margin: 0 20px; }
	.light { width: 60px; height: 128px; background: url('/static/imgs/light-sprite.png'); background-position-y: -34px; }
	.light.red {
    background-position-x: -10px;
	}
	.light.yellow { background-position-x: -71px; }
	.light.green { background-position-x: -132px; }
</style>
