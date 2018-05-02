<template>
	<div id="app">
		<calendar @calendartime="gettime" 
				:userTime="time" 
				:userNeedHm="1" 
				:userFormat="format" 
				userLang="zh"
		/>
		<div>选择的时间：{{time}}</div>
	</div>
</template>

<script>
export default {
	name: 'App',
	data (){
		return {
			time : '2018-05-12 20:20',
      		format : 'YYYY-MM-DD HH:mm'
		}
	},
	methods : {
		gettime(time){
			this.time = time;
		}
	}
}
</script>