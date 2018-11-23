<template>

  <div class="reiziger">
	<Hoofd/>
        <router-view></router-view>
    <Footer/>
  </div>
</template>


<script>
import Hoofd from "@/components/heading"
import Footer from "@/components/footer"
import Noodmelding from '@/components/noodmelding'

  export default {
    components: {
    	Hoofd,
    	Footer,
      Noodmelding
    }
  }
</script>

