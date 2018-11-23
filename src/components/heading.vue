<template>
	<div class="topbar">
		<div class="arrow">
			<i class="fa fa-angle-left"></i>
		</div>	
		<div class="logo">
			<img src="img/Logo-NS-monotone.svg">
		</div>
	</div>
</template>

<script>
export default {
  name: 'heading',
  props: ['msg']
}
</script>

<style lang="css">

	.topbar{
		padding-top: 10px;
		padding-bottom: 10px;
		width: 100%;
		background-color:#FFC917;
		display: inline-block;
	}
	.arrow{
		float:left;
		width: 25%;
		font-size: 25px;
	}
	.logo{
		padding-top: 6px;
		width: 50%;
		float: left;
	}
	.logo img{
		width:30px;
	}
	.rigt_space{
		width: 25%;
	}
</style>

