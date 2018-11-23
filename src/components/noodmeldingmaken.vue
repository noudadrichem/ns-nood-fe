<template>
  <div class="noodmelding-container">
  
    <h3 class="tile__heading headingM">Noodmelding maken</h3>
    <p>Wat is er aan de hand?</p>
  
    <div class="types">
      <div v-for="type in notificationTypes">
  
        <div :class="['type', type == notificationType ? 'active' : '']" @click="setNotificationType(type)">
          <div class="circle">
            <div v-if="type == 'Agressie'">
              <img src="../assets/agresive.svg" />
            </div>
            <div v-if="type == 'Medisch'">
              <img src="../assets/medical.svg" />
            </div>
            <div v-if="type == 'Intimidatie'">
              <span class="intimidatie">!</span>
            </div>
          </div>
  
          <span>{{ type }}</span>
        </div>
  
      </div>
    </div>
  
    <div class="train-number">
      <p class="none">Voer je treinstelnummer in:</p>
      <input v-model="trainNumber" class="textInput formfield__textInput" type="text" />
    </div>
  
    <div class="situation">
      <p class="none">Kan je de situatie beschrijven:</p>
      <textarea v-model="description" class="textInput formfield__textInput" type="text"></textarea>
    </div>

    <button @click="verifyNotification" class="button">Bevestig melding</button>
  
  </div>
</template>

<script>
  import axios from 'axios'
  
  export default {
    data: () => ({
      notificationTypes: ['Agressie', 'Intimidatie', 'Medisch'],
      notificationType: 'Intimidatie',
      trainNumber: '',
      description: '',
    }),
    methods: {
      setNotificationType(type) {
        this.$set(this, 'notificationType', type)
      },
      verifyNotification() {
        this.$router.push('noodSituatieOverzicht')
        const body = {
          NotificationType: 'noodmelding'
        }
        console.log(body);
        axios.post(`${this.$apiUrl}/api/komtmeldingaan`, body, { headers: {
          'Acces-Control-Allow-Origin': '*'
        }})
          .then(res => {
            // this.$router.push('noodSituatieOverzicht')
            console.log(res)
          })
      },
    }
  }
</script>

<style lang="css" scoped>
  .noodmelding-container {
    padding: 0 24px;
  }
  
  h3 {
    margin-bottom: 0;
  }
  
  .types {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  
  .type {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .type.active .circle {
    border: 2px solid #005ca0;
  }
  .type.active {
    color: #005ca0
  }
  
  .type span {
    display: block;
    font-size: 14px;
    margin-top: 8px;
  }
  
  .type span.intimidatie {
    font-size: 24px;
    margin-top: 0;
  }
  
  .circle {
    margin: auto;
    width: 64px;
    height: 64px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
  }
  
  .train-number {
    margin-top: 32px;
    margin-bottom: 24px;
  }
  
  p.none {
    margin-bottom: 0;
  }
  
  .train-number input {
    width: 100%;
  }
  
  .situation {
    margin-bottom: 16px;
  }

  .situation textarea {
    display: block;
    width: 100%;
    padding-left: .9375rem;
    padding-right: .9375rem;
    background-color: #fff;
    color: #070721;
    height: 6rem;
    line-height: 1.5625rem;
    resize: none;
    border: .0625rem solid #b5b5bc;
    border-radius: 0;
  }
</style>
