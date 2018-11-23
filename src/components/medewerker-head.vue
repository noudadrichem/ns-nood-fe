<template>
	<div class="topbar">
		<div class="arrow">
			<i class="fa fa-bars"></i>
		</div>	
		<div class="logo">
			<span id="time">{{time}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		computed:{
			time(){
				return `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
			}
		}
	}
</script>

<style lang="css">

	.topbar{
		padding-top: 10px;
		padding-bottom: 10px;
		width: 100%;
		background-color:#FFC917;
		display: inline-block;
		margin-bottom: 16px;
	}
	.arrow{
		font-size: 30px;
		width: 20%;
	}
	.arrow i{
		padding-left: 24px;
	}
	.logo{
		padding-top: 10px;
		width: 20%;
	}

	.topbar div{
		float:left;

	}
</style>

