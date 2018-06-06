<template>
  <div  class="my-message" >
    <div class="my-message-w">
      <h2>关于我</h2>
      <ul  class="jieshao">
        <li><div><i class="iconfont icon-iconcopy"></i></div><p><span >个人信息 </span> <br> 性别：男 <br>年龄: 23岁 籍贯：海南</p></li>
        <li><div><i class="iconfont icon-xueli"></i></div><p><span>专业学历 </span><br>专业：物理学<br> 学历：大学本科</p></li>
        <li><div><i class="iconfont icon-biyexuexiao"></i></div><p><span>毕业学校 </span>  <br>毕业学校：延边大学<br> 学习技能：编程</p></li>
        <li><div><i class="iconfont icon-lianxi"></i></div><p><span>联系方式 </span> <br> QQ：283033646<br> 微信：15103689046</p></li>
      </ul>
      <div  class="jieshaoxx">
        <p  class="miaoshu">您好，我叫肖世洲，23岁，坐标海南。虽然不是计算机专业,但物理学也开设有C语言和Mathematica等编程课程，对前端很感兴趣，今后的职业规划是朝着全栈发展。
          熟悉MongoDB+node.js+vue和php+mysql，了解模块化、自动化开发。目前主要负责前端页面，协助后台人员实现产品前端界面效果与功能。
          写过响应式页面，移动端页面，pc端页面，如商城，企业网站，视频，音频，评论，地图等都有涉及。</p>
      </div>
    </div>
  </div>
</template>


<style scoped>

  .my-message{
    width: 70%;
    height:70%;
    color: #ffffff;



  }

  .my-message h2{
    padding: 20px 0 35px 0;
    color: #ffffff;
    animation: my-message 1s;
  }
  @keyframes my-message {
    from {
      transform: translateY(-300px) ;

    }
    to{
      transform:  translateY(0px);

    }
  }
  .jieshao{
    margin: 0 auto;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-wrap:  wrap;
    animation:jieshao 1s ;
  }
  @keyframes jieshao {
    from {
      transform: translateX(-1000px) ;

    }
    to{
      transform:  translateX(0px);

    }
  }
  .jieshao li{
    width: 25%;
    height: 25%;
  }
  .jieshao li i{
    font-size: 30px;
    line-height: 60px;
  }
  .jieshao li div{
    margin: 0 auto;
    text-align: center;
    width: 60px;
    height: 60px;
    border-radius:50%;
    border: 1px #fff solid;
  }
  .jieshao li p{
    display: block;
    padding:0px 0 10px 0 ;
    font-size: 15px;

  }
  .miaoshu{
    text-align: left;
    line-height: 30px;
    text-indent:2em ;
    font-size: 18px;
    color: white;
    margin-top: 30px;
    animation: miaoshu 1s;

  }
  @keyframes miaoshu {
    from {
      transform: translateX(1000px) ;

    }
    to{
      transform:  translateX(0px);

    }
  }
  @media all and (max-width: 600px){
    .jieshao li{
      width: 50%;
      transform: scale(0.7);
    }
    .jieshao li p{
      display: block;
      font-size: 14px;

    }
    .my-message h2{
      padding: 20px 0 5px 0;

    }
    .miaoshu{
      line-height: 20px;
      font-size: 14px;
      color: white;
      margin-top:0;
    }
    .miaoshu{
      font-size: 14px;
    }

    .my-message{
      width: 95%;
      height:100%;
      color: #ffffff;
      transform: scale(0.8);

    }

  }

</style>
