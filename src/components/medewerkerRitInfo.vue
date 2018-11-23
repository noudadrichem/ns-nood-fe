<template>
<div class="overzicht">
  <div class="content">
    <h4>V&S NVT E 5015</h4>
    <div class="van_naar_blok">
      <div id="van">Van:</div>
      <div class="van_naar_left"><input type="text" value="Vlissingen"></div>
      <div id="naar">Naar:</div>
      <div class="van_naar_left"><input type="text" value="Amsterdamcentraal"></div>
    </div>
  </div>
  <div class="boks2">
    <div class="optie">ACTIVITEIT</div>
    <div class="optie">SERVICE INFO</div>
    <div class="optie">NOODMELDING</div>
  </div>
  
</div>
</template>
<style lang="css">

.boks2{
  background-color:   #003082;
  display: inline-flex;
  width: 100%;
}
#border
.boks2 .optie{
  padding-bottom: 20px; 
  color:white;
  width: 32%;
  text-align: center;
}
#van,#naar{
color:#FFFFFF;
width: 25%;
float: left;
}
input[type=text] {
font-weight: bold;
border: none;
width: 75%;
color:#FFFFFF;
background-color: transparent;
}
.van_naar_left{
float:left;
width: 75%;
margin-bottom: 5px;
}
.van_naar_blok{
width: 100%;
height: 80px;
}
.content{
padding:10px;
height: 140px;
background-color:   #003082;
}
.topbar{
margin-bottom: -4px;
}
</style>