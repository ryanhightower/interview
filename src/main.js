// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

const events = new Vue()

Vue.config.productionTip = false
Vue.mixin({
	data: function () {
		return {
			events
		}
	}
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<App/>',
	components: { App }
})
