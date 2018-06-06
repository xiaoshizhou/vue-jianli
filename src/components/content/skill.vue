<template>
  <div class="jsz">
    <div class="jsz-w">
      <div><h2 >技术栈</h2></div>

      <div >
        <div class="jsz-xx">
          <p>1. 熟练HTML5，CSS3，JavaScript技术，开发符合W3C标准的前端网页。</p>
          <p>2. 熟练使用jQuery，bootstrap等前端框架技术。</p>
          <p>3. 熟悉Ajax的运行机制，能使用ajax进行数据交互。</p>
          <p>5. 熟练使用PS、Mockplus,能快速切图和搭建原型图。</p>
          <p>6. 熟悉W3C标准，对表现与数据分离、Web语义化等有较为深刻的理解</p>
          <p>7. 熟悉MongoDB+node.js+vue和php+mysql</p>
          <p>8. 熟悉各种主流浏览器的差异性，有解决主流浏览器的兼容性问题的经验。</p>
          <p>9. 熟悉在windows下项目部署</p>
        </div>
      </div>
    </div>
    <div class="boxw">
      <div class="box">
        <ul class="minbox">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ol class="maxbox">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>
    </div>

  </div>
</template>


<style scoped>
  .box{
    display: none\0;
    width:200px;
    height:200px;
    position: absolute;
    right: 0;
    top:0;
    -webkit-transform-style:preserve-3d;
    transform-style:preserve-3d;
    -webkit-transform:rotateX(13deg);
    transform:rotateX(13deg);
    -webkit-animation:move 5s linear infinite;
    animation:move 5s linear infinite;
  }
  .minbox{
    width:100px;
    height:100px;
    position: absolute;
    left:50px;
    top:50px;
    -webkit-transform-style:preserve-3d;
    transform-style:preserve-3d;
  }
  .minbox li{
    width:100px;
    height:100px;
    position: absolute;
    left:0;
    top:0;
  }
  .minbox li:nth-child(1){
    background: url(../../assets/img/01.png) no-repeat 0 0;
    -webkit-transform:translateZ(50px);
    transform:translateZ(50px);
  }
  .minbox li:nth-child(2){
    background: url(../../assets/img/02.png) no-repeat 0 0;
    -webkit-transform:rotateX(180deg) translateZ(50px);
    transform:rotateX(180deg) translateZ(50px);
  }
  .minbox li:nth-child(3){
    background: url(../../assets/img/03.png) no-repeat 0 0;
    -webkit-transform:rotateX(-90deg) translateZ(50px);
    transform:rotateX(-90deg) translateZ(50px);
  }
  .minbox li:nth-child(4){
    background: url(../../assets/img/04.png) no-repeat 0 0;
    -webkit-transform:rotateX(90deg) translateZ(50px);
    transform:rotateX(90deg) translateZ(50px);
  }
  .minbox li:nth-child(5){
    background: url(../../assets/img/05.png) no-repeat 0 0;
    -webkit-transform:rotateY(-90deg) translateZ(50px);
    transform:rotateY(-90deg) translateZ(50px);
  }
  .minbox li:nth-child(6){
    background: url(../../assets/img/06.png) no-repeat 0 0;
    -webkit-transform:rotateY(90deg) translateZ(50px);
    transform:rotateY(90deg) translateZ(50px);
  }
  .maxbox{
    width: 180px;
    height: 180px;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
  .maxbox li{
    width: 200px;
    height: 200px;
    background: #fff;
    border:1px solid #ccc;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.2;
    -webkit-transition:all 1s ease;
    -o-transition:all 1s ease;
    transition:all 1s ease;
  }
  .maxbox li:nth-child(1){
    -webkit-transform:translateZ(100px);
    transform:translateZ(100px);
  }
  .maxbox li:nth-child(2){
    -webkit-transform:rotateX(180deg) translateZ(100px);
    transform:rotateX(180deg) translateZ(100px);
  }
  .maxbox li:nth-child(3){
    -webkit-transform:rotateX(-90deg) translateZ(100px);
    transform:rotateX(-90deg) translateZ(100px);
  }
  .maxbox li:nth-child(4){
    -webkit-transform:rotateX(90deg) translateZ(100px);
    transform:rotateX(90deg) translateZ(100px);
  }
  .maxbox li:nth-child(5){
    -webkit-transform:rotateY(-90deg) translateZ(100px);
    transform:rotateY(-90deg) translateZ(100px);
  }
  .maxbox li:nth-child(6){
    -webkit-transform:rotateY(90deg) translateZ(100px);
    transform:rotateY(90deg) translateZ(100px);
  }
  .box:hover ol li:nth-child(1){
    -webkit-transform:translateZ(300px);
    transform:translateZ(300px);
  }
  .box:hover ol li:nth-child(2){
    -webkit-transform:rotateX(180deg) translateZ(300px);
    transform:rotateX(180deg) translateZ(300px);
  }
  .box:hover ol li:nth-child(3){
    -webkit-transform:rotateX(-90deg) translateZ(300px);
    transform:rotateX(-90deg) translateZ(300px);
  }
  .box:hover ol li:nth-child(4){
    -webkit-transform:rotateX(90deg) translateZ(300px);
    transform:rotateX(90deg) translateZ(300px);
  }
  .box:hover ol li:nth-child(5){
    -webkit-transform:rotateY(-90deg) translateZ(300px);
    transform:rotateY(-90deg) translateZ(300px);
  }
  .box:hover ol li:nth-child(6){
    -webkit-transform:rotateY(90deg) translateZ(300px);
    transform:rotateY(90deg) translateZ(300px);
  }
  @-webkit-keyframes move{
    0%{
      -webkit-transform: rotateX(0deg) rotateY(0deg);
      transform: rotateX(0deg) rotateY(0deg);
    }
    100%{
      -webkit-transform:rotateX(360deg) rotateY(360deg);
      transform:rotateX(360deg) rotateY(360deg);
    }
  }
  @keyframes move{
    0%{
      -webkit-transform: rotateX(0deg) rotateY(0deg);
      transform: rotateX(0deg) rotateY(0deg);
    }
    100%{
      -webkit-transform:rotateX(360deg) rotateY(360deg);
      transform:rotateX(360deg) rotateY(360deg);
    }
  }



  .jsz h2{
     margin:20px;
    animation:jszh2 1s ;
  }
  @keyframes jszh2 {
    from {
      transform: translateY(-300px) ;

    }
    to{
      transform:  translateY(0px);

    }
  }
  .jsz-xx{
     width: 70%;
    margin: 0 auto;
    color: #ffffff;
    text-align: left;
    font-size: 20px;
    line-height:30px;


  }
  .jsz-xx p:nth-of-type(1){
     animation: jszp 0.3s;
  }
  .jsz-xx p:nth-of-type(2){
    animation: jszp 0.4s;
  }
  .jsz-xx p:nth-of-type(3){
    animation: jszp 0.5s;
  }
  .jsz-xx p:nth-of-type(4){
    animation: jszp 0.6s;
  }
  .jsz-xx p:nth-of-type(5){
    animation: jszp 0.7s;
  }
  .jsz-xx p:nth-of-type(6){
    animation: jszp 0.8s;
  }
  .jsz-xx p:nth-of-type(7){
    animation: jszp 0.9s;
  }
  .jsz-xx p:nth-of-type(8){
    animation: jszp 1s;
  }
  @keyframes jszp {
    from {
      transform: translateX(-1000px) ;

    }
    to{
      transform:  translateX(0px);

    }
  }
  .jsz{
    width: 70%;
    height:70%;
    color: #ffffff;

    position: relative;

  }
  @media all and (max-width: 600px){
    .jsz{
      height: 90%;
      width: 100%;
      transform: scale(0.9);

    }
    .jsz-xx{
      width: 80%;
      text-align: left;
      font-size: 15px;
      line-height:30px;


    }
    .maxbox{
      -webkit-transform: scale3d(0.5,0.5,0.5 );
      transform: scale3d(0.5,0.5,0.5 );

    }
    .minbox{
      -webkit-transform: scale3d(0.5,0.5,0.5 );
      transform: scale3d(0.5,0.5,0.5 )
    }
    .jsz-xx{
      font-size: 15px;
      line-height: 25px;

    }
    .jsz h2{
      margin:10px;
    }
  }



</style>
