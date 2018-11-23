<template>
	<div class="topbar">
		<div v-if="$route.path != '/reiziger'">
			<div class="arrow" @click="$router.go(-1)">
				<i class="fa fa-angle-left"></i>
			</div>	
		</div>
		
		<div class="logo">
			<img src="img/Logo-NS-monotone.svg">
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		console.log(this.$route)
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
		width: 40%;
	}
	.arrow i{
		padding-left: 24px;
	}
	.logo img{
		width: 40px;
		padding-top: 12px;
		margin-left: 10px;
	}
	.logo{

		width: 20%;
	}

	.topbar div{
		float:left;

	}
</style>

