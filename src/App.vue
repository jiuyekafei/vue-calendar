<template>
	<div id="app">
		<calendar @calendartime="gettime"/>
		<div>选择的时间：{{time}}</div>
	</div>
</template>

<script>
export default {
	name: 'App',
	data (){
		return {
			time : ''
		}
	},
	methods : {
		gettime(time){
			this.time = time;
		}
	}
}
</script>