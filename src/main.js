import Vue from 'vue'
import App from './App'
import calendar from './calendar/index.js'

Vue.use(calendar);

new Vue({
	el: '#app',
	components: { App },
	template: '<App/>'
});
