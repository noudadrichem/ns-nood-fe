<template>
  <div class="home">
    <Heading msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

// @ is an alias to /src
import Heading from '@/components/heading.vue'

export default {
  name: 'home',
  components: {
    Heading
  }
}
</script>
