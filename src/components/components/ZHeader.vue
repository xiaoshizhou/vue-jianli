<template>
  <div class="header">
    <h1>
      <a href="javascript:void(0)"><img src="../../assets/img/logo.jpg" alt=""></a>
    </h1>
    <div class="top-a">
      <a href="javascript:void(0)" class="header-a">Abaut</a>
      <a href="javascript:void(0)"  class="header-a">production</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ZHeader"
    }
</script>

<style scoped>
  .header{
    position: fixed;
    height: 60px;
    line-height: 60px;
    z-index: 100;
    width:100%;

  }
  .header h1{
    float: left;
  }
  .header  a:hover{
    background: rgba(255,255,255,0.15);
  }
  .header h1 img{
    vertical-align: middle;
    width: 40px;
    height: 40px;
    padding: 0 10px 0 0;
    border-right: 1px solid #f5f5f5;
  }
  .header h1 a{
    display: block;
    height: 60px;
    padding:0 0 0 10px;
  }
  .header div a{
    text-transform: capitalize;
    color: #fff;
    font-size: 15px;
    display: block;
    height: 60px;;
    float: left;
    padding: 0 8px;
  }

</style>
