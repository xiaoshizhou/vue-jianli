<template>
  <div class="fm">
    <div class="fm-w">
      <h2>focus me</h2>
      <span>灵感</span>
      <span>分享</span>
      <span>知化</span>
      <span>未来</span>
      <p>在生命中的每一天</p>
      <p>都希望做一个全新的自己：一个敢于挑战的自己，一个生命飞扬的自己。</p>
      <p>每一个人，都与众不同，有着自己独特的美</p>
      <p></p>
    </div>
  </div>
</template>


<style scoped>
  .fm{
    width: 70%;
    height:70%;

    color: #ffffff
  }


  .fm h2{
    font-size: 30px;
    padding: 50px;
  }
  .fm  span{
    font-size: 25px;
    padding: 5px;
  }
  .fm  span:nth-of-type(1){
    color:red;
  }
  .fm  span:nth-of-type(2){
    color:gold;
  }
  .fm  span:nth-of-type(3){
    color:blue;
  }
  .fm  span:nth-of-type(4){
    color:#ff5588;
  }
  .fm p{
    padding: 10px;
    font-size: 20px;
  }
  .fm-w{
    animation:fm-w 1.2s ;
  }
  @keyframes fm-w{
   25% {
      transform: scale(0) ;

    }
    50%{
      transform:   scale(2) ;

    }
    75%{
      transform:  translateY(1.5);

    }
  100%{
    transform:  translateY(1);
  }
  }

  @media all and  (max-width: 600px){
    .fm{
      width: 90%;
      height:90%;
    transform: scale(0.8);
      color: #ffffff
    }
  }
</style>
