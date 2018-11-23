<template>

  <div class="reiziger">
	<Hoofd/>
    <button class="button button--arrowRight rppb-plan-button">NS BUTTON</button>
    <Footer/>
  </div>
</template>


<script>
import Hoofd from "@/components/heading"
import Footer from "@/components/footer"

  export default {
    components: {
    	Hoofd,
    	Footer
    }
  }
</script>
