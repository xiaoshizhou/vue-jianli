<template>
  <div class="home" >
    <div class="home-w">
      <div href="#" class="touxiang">
      </div>
      <div>

        <h2>仰望星空的人，星空也在仰望你</h2></div>
      <hr>
      <p>我叫肖世洲</p>
      <p >一名前端/全栈工程师</p>
    </div>
  </div>
</template>


<style scoped>
  .home{
    width: 70%;
    height:70%;

    color: #ffffff
  }


  .touxiang{
    display: block;
    width: 130px;
    height: 130px;
    margin: 40px auto;
    border-radius:50%;

    background: url("../../assets/img/xiaoshizhou.jpg") no-repeat;
    background-size: 100%;
    animation: touxiang  2.5s;

  }
  @keyframes touxiang {
    from {
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
  .touxiang:hover{
    border: 1px #aaffbb solid;
  }
  .home p:nth-of-type(1){
    font-size: 20px;
    color: #ffffff;
    padding: 20px 0 10px 0;
  }

  .home h2{
    color: #ffffff;
    padding: 0 0 10px 0;
    animation:homeh2 1s ;
  }
  @keyframes homeh2 {
    from {
      transform: translateY(-1000px) ;

    }
    to{
      transform:  translateY(0px);

    }
  }
  .home p{
    animation:homep 1s ;
  }

  @keyframes homep {
    from {
      transform: translateY(1000px) ;

    }
    to{
      transform:  translateY(0px);

    }
  }

  @media all and  (max-width: 600px){
    .home{
      width: 90%;
      height:90%;
  transform: scale(0.8);
      color: #ffffff
    }
  }
</style>
