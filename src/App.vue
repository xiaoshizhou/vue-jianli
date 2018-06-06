<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
*{
  margin: 0;
  padding: 0;
}
ul,ol,li{
  list-style: none;
}
a{
  text-decoration: none;
  font-family: "微软雅黑";
}
html,body{
  width: 100%;
  height: 100%;
  overflow: hidden;

}

</style>
