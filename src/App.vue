<template>
  <div id="app">
    <div id="mobile-container">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
      <router-view/>
    </div>
  </div>
</template>

<style>
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: "NS Sans","Segoe UI",Myriad,Verdana,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #060922;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

#mobile-container {
  width: 100%;
  max-width: 375px;
  height: 100vh;
  max-height: 667px;
  background-color:#ededed;
  display: block;
  position: relative;
}

p {
  font-size: 1rem;
  line-height: 1.5625rem;
}
</style>
