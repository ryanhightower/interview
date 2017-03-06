<template lang="html">
<div class="world">

	<traffic-light direction="ns">North/South</traffic-light>

	<traffic-light direction="nwse">North/South left turns</traffic-light>
	<traffic-light direction="ew">East/West</traffic-light>
	<traffic-light direction="wsen">East/West left turns</traffic-light>
	<traffic-controller></traffic-controller>
	direction: {{ store.direction }}
</div>
</template>

<script>
import TrafficLight from './TrafficLight'
import TrafficController from './TrafficController'
export default {
	name: 'World',
	components: {
		TrafficLight,
		TrafficController
	},
	data () {
		return {}
	}
}
</script>

<style lang="css">
</style>
