import Vue from 'vue'
import App from './App'
import calendar from './calendar'

Vue.use(calendar);

new Vue({
	el: '#app',
	components: { App },
	template: '<App/>'
});
