<template>
<div>
  <h1>dit is de heading</h1>
  <p>Dit is mijn message: {{ msg }}</p>
</div>
</template>

<script>
export default {
  name: 'heading',
  props: ['msg']
}
</script>

