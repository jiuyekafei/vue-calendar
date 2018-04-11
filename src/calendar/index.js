import Calendar from './calendar'

const calendar = {
	install (Vue ,options){
		Vue.component(Calendar.name ,Calendar);
	}
};
if(typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(calendar);
}
export default calendar;