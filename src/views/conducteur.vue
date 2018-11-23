<template>
  <div class="reiziger">
    <Hoofd/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>


<script>
import Hoofd from "@/components/medewerker-head"
import Footer from "@/components/footer"
import Noodmelding from '@/components/noodmelding'
import NoodSituatieOverzicht from '@/components/noodSituatieOverzicht'

  export default {
    components: {
    	Hoofd,
    	Footer,
      Noodmelding,
      NoodSituatieOverzicht
    }
  }
</script>

