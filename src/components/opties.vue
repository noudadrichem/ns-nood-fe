<template>
  <div class="noodmelding-container">
  <div class="nano__container">
    <ul class="mainMenu__list">
      <li class="mainMenu__item">
         <router-link to="reiziger/noodmelding"><a  class="mainMenu__link  mainMenu__link--reisinformatie" aria-expanded="false">
        Noodmelding</a></router-link>
      </li>
      <li class="mainMenu__item">
        <a href="#" class="mainMenu__link  mainMenu__link--kaartjes" aria-expanded="false">
        Kaartjes &amp; Toeslagen</a>
      </li>
      <li class="mainMenu__item">
        <a href="#submenu-abonnementen" class="mainMenu__link  mainMenu__link--abonnementen" aria-expanded="false">
        Abonnementen</a>
      </li>
      <li class="mainMenu__item">
        <a href="#" class="mainMenu__link  mainMenu__link--deurTotDeur" aria-expanded="false">
        Deur tot deur</a>
      </li>
      <li class="mainMenu__item">
        <a href="#" class="mainMenu__link  mainMenu__link--dagjeUit" aria-expanded="false">
        Dagje uit</a>
      </li>
      <li class="mainMenu__item">
        <a href="#" class="mainMenu__link  mainMenu__link--voorBedrijven" aria-expanded="false">
        Zakelijk</a>
      </li>
      <li class="mainMenu__item">
        <a href="#" class="mainMenu__link  mainMenu__link--nsInternational" aria-expanded="false">
        NS International</a>
      </li>
      <li class="mainMenu__item">
        <a href="#" class="mainMenu__link  mainMenu__link--klantenservice" aria-expanded="false">
        Klantenservice</a>
      </li>
      <li class="mainMenu__item">
        <a href="#" class="mainMenu__link  mainMenu__link--meerNs" aria-expanded="false">
        Meer NS</a>
      </li>
    </ul>
</div>
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
    padding:0 30px;
  }
</style>


