<template>
  <div class="reiziger">
    <!-- <button class="button button--arrowRight rppb-plan-button"></button>

    <span _ngcontent-c0="" class="icon icon--refresh icon--nsBlue icon--inline">
      <span _ngcontent-c0="" class="alt">Vertrek </span>
    </span> -->
    <router-view></router-view>
    <!-- <Noodmelding/> -->
  </div>
</template>

<script>
import Noodmelding from '@/components/noodmelding'

export default {
  name: 'reiziger',
  components: {
    Noodmelding
  }
}
</script>



