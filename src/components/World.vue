<template lang="html">
<div class="world">
	<ul>
		<!--<li>
			<label for=""><input type="text" v-model="duration" name="" value=""> Light Duration (milliseconds)</label>
		</li>
		 <li>
			<label for=""><input type="text" v-model="yellowDelay" name="" value=""> Yellow Light Duration (milliseconds)</label>
		</li>
		<li>
			<label for=""><input type="text" v-model="greenDelay" name="" value=""> Delay before Green Light (milliseconds)</label>
		</li> -->
	</ul>
	<traffic-light direction="ns" :yellow-delay="yellowDelay" :green-delay="greenDelay">North/South</traffic-light>
	<traffic-light direction="nwse" :yellow-delay="yellowDelay" :green-delay="greenDelay">North/South left turns</traffic-light>
	<traffic-light direction="ew" :yellow-delay="yellowDelay" :green-delay="greenDelay">East/West</traffic-light>
	<traffic-light direction="wsen" :yellow-delay="yellowDelay" :green-delay="greenDelay">East/West left turns</traffic-light>
	<traffic-controller :time="duration"></traffic-controller>
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
		return {
			yellowDelay: 1000,
			greenDelay: 500,
			duration: 4000
		}
	}
}
</script>

<style lang="css">
	ul { list-style: none; }
</style>
