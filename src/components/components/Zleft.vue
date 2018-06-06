<template>
  <div>
    <ul class="m-left">
      <li>
        <router-link to='/home' ><a href="javascript:void(0)"><i class="iconfont icon-shouye"></i> <span>home&nbsp;page</span></a></router-link>
      </li>
      <li>
        <router-link to='/myMessage' ><a href="javascript:void(0)"><i class="iconfont icon-guanyuwo"></i><span>about&nbsp;me</span></a></router-link>
      </li>
      <li>
        <router-link to='/skill' ><a href="javascript:void(0)"><i class="iconfont icon-jineng"></i><span>skills</span></a></router-link>
      </li>
      <li>
        <router-link to='/experience' ><a href="javascript:void(0)"><i class="iconfont icon-gongzuojingli"></i> <span>Experience</span></a></router-link>
      </li>
      <li>
        <router-link to='/produce' ><a href="javascript:void(0)"><i class="iconfont icon-weibiaoti1"></i><span class="title">production</span></a></router-link>
      </li>
      <li>
        <router-link to='/focusme' ><a href="javascript:void(0)"><i class="iconfont icon-lianxiwomen-copy"> </i> <span >call&nbsp; me</span></a></router-link>
      </li>
    </ul>

  </div>
</template>

<script>
    export default {
        name: "Zleft"
    }
</script>

<style scoped>
  .m-left{
    position: fixed;
    z-index:5 ;
    width: 60px;
    height: 360px;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;

  }
  .m-left span{
    text-transform: uppercase;
    width: 100px;
    height: 50px;
    position: absolute;
    left:80px;
    border-bottom: 2px #fff solid;
    top: 0;
    display: none;
  }
  .m-left li i{
    color: white;
    font-size: 20px;
  }
  .m-left li a{
    background:rgba(255,255,255,0.2);
    display: block;
    width: 60px;
    height: 60px;
    color: white;
    line-height: 60px;
  }
  .m-left li a:hover>span{
    display: block;
  }
  .m-left li:hover{
    background: blue;
  }
  .m-left li{
    width: 60px;
    height: 60px;
    color: white;
    text-align: center;
    position: relative;

  }
  @media all and (max-width: 600px){
    .m-left li a:hover>span{
      display:none;
    }
    .m-left{
     transform: scale(0.6);

    }
    .m-left li:hover{
      background:none;
    }
  }
</style>
