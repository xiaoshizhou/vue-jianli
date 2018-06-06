<template>
  <div class="footer">
    <div class="f-b"@click="onclick">
      <i class="iconfont icon-up-trangle"></i>
    </div>
    <div>
      <ul>
        <li class="qq">
          <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=283033646&site=qq&menu=yes">
            <i class="iconfont icon-icon"></i>
          </a>
        </li>
        <li class="weixin">
          <i class="iconfont icon-weixin-copy"></i>
        </li>
        <li>
          <a href="https://github.com/xiaoshizhou"><i class="iconfont icon-github"></i></a>

        </li>
        <li>
          <a href="https://www.zhihu.com/people/you-tian-xia-29/activities"><i class="iconfont icon-zhihu"></i></a>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ZFooter",
      props:['routers','n'],
      methods:{
          onclick(){
            this.$emit('change');

          }
      }
    }
</script>

<style scoped>
  .footer div:nth-of-type(1) i{
    font-size: 35px;
    line-height: 50px;
    animation: fi 1s infinite;
  }
  @keyframes fi {
    to{
      line-height: 35px;
    }
  }
  .footer{
    width: 100%;
    margin:  auto;
    position:fixed;
    left: 0;
    right: 0;
    z-index: 100;
    bottom: 30px;
    overflow: hidden;
    clear: both;
  }

  .footer div:nth-of-type(1){
    text-align: center;
    color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px #ffffff solid;
    margin: 0 auto;
  }
  .footer div:nth-of-type(2){
    float:right;
    margin-right: 20px;
  }
  .footer div:nth-of-type(2) li{
    text-align: center;
    margin: 4px;
    padding: 2px;
    float: left;
    width: 20px;
    height: 20px;
    border: 2px #dddddd solid;
    border-radius: 50%;
  }
  .footer div:nth-of-type(2) li i{
    color: aquamarine;
    line-height: 20px;
  }
  @media all and (max-width: 600px){
    .footer div:nth-of-type(2){
      width: 150px;
      height: 50px;
     margin: 0 auto;
      float:none;
    }
    .footer{


    }
  }
  .footer div:nth-of-type(1){
    margin: 0px auto;
  }
</style>
