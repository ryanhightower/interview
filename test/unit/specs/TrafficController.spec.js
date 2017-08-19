import Vue from 'vue'
import TrafficController from '@/components/TrafficController'

describe('TrafficController.vue', () => {
	describe('changeTrafficDirection()', () => {
		it('should change direction', () => {
			const Constructor = Vue.extend(TrafficController)
			const vm = new Constructor().$mount()
			expect(vm.direction)
				.to.equal('ns')
			vm.changeTrafficDirection('ew')
			expect(vm.direction).to.equal('ew')
			vm.changeTrafficDirection()
			expect(vm.direction).to.equal('wsen')
		})
	})

  describe('setTimer()', () => {
		it('should set a timer on "mount"', () => {
			const Constructor = Vue.extend(TrafficController)
			const vm = new Constructor().$mount()
      console.log(vm.lightTimer)
			expect(vm.lightTimer)
				.to.exist
			expect(vm.lightTimer)
				.to.not.be.undefined
		})
	})
})
