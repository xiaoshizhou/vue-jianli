<template>
  <div class="produce">
    <div class="produce-w">
      <div class="produce-t" >
        <h2>作品集</h2>
        <h4 >主要涉及电商，金融，家装领域，包括PC端，手机端，微信端，移动APP端等</h4>
      </div>
      <ul  class="zuopin">
        <li><a href=""><img src="../../assets/img/p1.jpg" alt=""></a></li>
        <li><a href=""><img src="../../assets/img/p2.jpg" alt=""></a></li>
        <li><a href=""><img src="../../assets/img/p3.jpg" alt=""></a></li>
        <li><a href=""><img src="../../assets/img/p4.jpg" alt=""></a></li>
        <li><a href=""><img src="../../assets/img/p5.jpg" alt=""></a></li>
        <li><a href=""><img src="../../assets/img/p6.jpg" alt=""></a></li>
      </ul>

    </div>
  </div>
</template>


<style scoped>


  .produce{
    width: 70%;
    height:70%;

    color: #ffffff;


  }

  .zuopin{
    display: flex;
    justify-content: center;
    flex-wrap:  wrap;
    width: 70%;
    height:70%;
    margin: 0 auto;

  }
  .zuopin li a{
   display: block;

    vertical-align: middle;
    text-align: center;

  }
  .zuopin li{
    width:30%;
    background: rgba(255,255,255,1);
    transition: 0.5s ease-in-out;
    margin: 2px;

  }

  .zuopin li:nth-of-type(1){
    animation:zuopinli 0.2s ;
  }

  .zuopin li:nth-of-type(2){
    animation:zuopinli 0.4s ;
  }
  .zuopin li:nth-of-type(3){
    animation:zuopinli 0.6s ;
  }
  .zuopin li:nth-of-type(4){
    animation:zuopinli 0.8s ;
  }
  .zuopin li:nth-of-type(5){
    animation:zuopinli 1s ;
  }
  .zuopin li:nth-of-type(6){
    animation:zuopinli 1.2s ;
  }

  @keyframes zuopinli {
    from {
      transform: translateY(-1000px) translateX(1500px) scale(0) rotate(1440deg);


    }
    to{
      transform: translateY(0px) translateX(0px) scale(1) rotate(0deg) ;

    }
  }
  .zuopin li:hover {
    transform: scale(1.2);
    background: rgba(255,255,255,0.3);

  }
  .zuopin li a img{
   padding-top: 10px;
    width: 90%;
    height:90%;
  }
  .produce-w h4{
    margin: 10px;
  }
  .produce-t{
   animation: produce-t 1.2s;
  }
  @keyframes produce-t {
    from {
      transform: translateY(200px) ;


    }
    to{
      transform: translateY(0px) ;

    }
  }
  @media all and (max-width: 600px){
    .zuopin li{
      width:40%;
    }
    .zuopin li a img{
      padding-top: 10px;
      width: 90%;
      height:90%;
    }
  }
</style>
