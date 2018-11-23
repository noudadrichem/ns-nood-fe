<template>
  <div class="noodmelding-container">
  
    <h3 class="tile__heading headingM">Noodsitutatie</h3>
  
    <button @click="maakNoodmelding" class="btn noodmelding">Noodmelding maken</button>
  
    <p>Zit je in een noodsituatie? De noodknop maakt een directe verbinding met <b></b> en zorgt ervoor dat de situatie zo snel mogelijk veilig wordt opgelost.</p>
  
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    methods: {
      maakNoodmelding() {
        console.log('Maak hier je noodmelding')
        const endpoint = ``
        axios.post(endpoint)
          .then(res => {
            console.log(res)
          })
      }
    }    
  }
</script>

<style lang="css" scoped>
  .noodmelding-container {
    padding:0 24px;
  }
  .btn.noodmelding {
    background-color: #dc001f;
    display: inline-block;
    position: relative;
    height: 2.8125rem;
    vertical-align: top;
    min-width: 7.5rem;
    font-weight: 400;
    white-space: nowrap;
    color: #fff;
    -webkit-box-shadow: inset 0 -0.125rem 0 #910015;
    box-shadow: inset 0 -0.125rem 0 #910015;
    text-align: center;
    line-height: 1.5625rem;
    font-size: 1rem;
    border: none;
    text-decoration: none;
    -webkit-transition: -webkit-box-shadow .15s ease-in-out;
    transition: -webkit-box-shadow .15s ease-in-out;
    transition: box-shadow .15s ease-in-out;
    transition: box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
    padding: .625rem 1.125rem;
  }

  p {
    margin-top: 24px;
  }
</style>


