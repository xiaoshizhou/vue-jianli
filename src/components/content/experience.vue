<template>
  <div  class="experience">
    <div class="experience-w">
      <h2 >个人经历</h2>
      <div  class="experience-h1">
        <div >
          <h4>2017.10 - 2018.10 </h4>
        </div>
        <div >
          <h3>海南骏森广告营销策划有限公司</h3>
          <p>负责图片美化和设计</p>
          <p>负责前端开发工作，根据UI设计图完成页面排版 </p>
          <p> 按要求实现界面动画，交互功能</p>
          <p> 与后端程序员完成前端修改调试和开发工作，确保代码有效对接</p>
        </div>
      </div>
      <div  class="experience-h2">
        <div>
          <h4>2017.3 - 2017.9 </h4>
        </div>
        <div >
          <h3> 延边众生云计算科技有限公司 </h3>
          <p>2017年3月进入延边众生云计算科技有限公司实习，主要负责网站后台维护，前端页面制作，设计。</p>
          <p>协同他人一起管理产品的上架，客户的沟通！ </p>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
  .experience{
    width: 70%;
    height:70%;
    color: #ffffff
  }
  .experience h2{
    margin:50px 0 20px 0;
    animation:experience-w 1s ;
  }
  .experience-h1 {
    animation: experience-h1 1s;
  }
  .experience-h2{
    animation: experience-h2 1s;
  }


  @keyframes experience-h1 {
    from {
      transform: translateX(-1000px) ;

    }
    to{
      transform:  translateX(0px);

    }
  }
  @keyframes experience-h2 {
    from {
      transform: translateX(1000px) ;

    }
    to{
      transform:  translateX(0px);

    }
  }

  .experience h3,.experience h5{
    padding: 20px;
  }

  .experience p{
    font-size: 15px;
  }
  .experience-w{

  }

  @keyframes experience-w {
    from {
      transform: rotateY(0deg);
      opacity:0;


    }
    to{
      transform: rotateY(360deg) ;
      opacity: 1;


    }
  }
@media all and  (max-width: 600px){
  .experience{
    width:90%;
    height:90%;
    color: #ffffff;
    transform: scale(0.8);

  }
}

</style>
