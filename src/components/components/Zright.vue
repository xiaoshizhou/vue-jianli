<template>
   <div>
     <ul class="m-right" >
       <li v-for="item in routers">
         <router-link tag="a"   :to="'/'+item.router" > </router-link>
       </li>


     </ul>
   </div>
</template>

<script>
    export default {
        name: "Zright",
      data(){
          return{
            routers:[{router:'home'},{router:'myMessage'},{router:'skill'},{router:'experience'},{router:'produce'},{router:'focusme'}],
          }
      },
      watch:{
        "$route":"getname"

      },
      methods:{
        getname(){
          this.routeName = this.$route.name
        }

      }

    }
</script>

<style scoped>


  .m-right{
    position:fixed;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    z-index: 100;

    width: 30px;
    height:180px;

  }
  .m-right li{
    width: 10px;
    height: 10px;
    margin: 10px;
    border-radius: 50%;
    background:#333;
  }
  .m-right li a{
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #333;
  }
  .m-right li:hover{
    -webkit-transform:scale(1.5) ;
    -moz-transform:scale(1.5) ;
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
  }
  .m-r-ative{
    -webkit-animation:1s  m-r-ative infinite;
    -o-animation: 1s  m-r-ative infinite;
    animation:1s  m-r-ative infinite ;
  }
  @keyframes m-r-ative{
    from{
      background:rgba(255,255,255,0.2);
    }
    to{
      background:rgba(255,255,255,0.1);
      -webkit-transform:scale(2) ;
      -moz-transform:scale(2) ;
      -ms-transform: scale(2);
      -o-transform: scale(2);
      transform: scale(2);
    }
  }


</style>
