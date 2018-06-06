<template>
    <div >
    <div class="wrap" @touchstart="touchstart"    @touchmove="touchmove"   @mousewheel="mousewheel">

      <z-header></z-header>
      <z-right></z-right>
      <z-left></z-left>
      <z-background></z-background>
      <div class="main" >

          <router-view ></router-view>

      </div>
       <z-footer v-bind:routers="routers" v-bind:n="n" @change="add"></z-footer>

    </div>

  </div>
</template>

<script>
  import ZHeader from '@/components/components/ZHeader'
  import ZLeft from '@/components/components/ZLeft'
  import ZRight from '@/components/components/ZRight'
  import ZBackground from '@/components/components/ZBackground'
  import ZFooter from '@/components/components/Zfooter'

  //
export default {
  name: 'jianli',
  data(){
    return{
      routers:[{router:'home'},{router:'myMessage'},{router:'skill'},{router:'experience'},{router:'produce'},{router:'focusme'}],
      oclientY :0,
      moclientY:0,
      n:0,
      delta1:0
    }
  },
  components:{
    ZBackground,
    ZHeader,
    ZLeft,
    ZRight,
    ZFooter
  },
  methods:{
    add(){
      this.n=Math.min(++this.n,5);
      //console.log(this.n);
     this.$router.replace('/'+this.routers[this.n].router)
    },

    touchstart(e){
       this.oclientY=e.touches[0].clientY;
      //oclientY=e.touches[0].clientY
     //console.log( this.oclientY);
    },
    touchmove(e){
      this. moclientY =e.touches[0].clientY
      if(this.oclientY-this.moclientY>100){
        //console.log("++");
        this.n=Math.min(++this.n,5);
        //console.log(this.n);
        this.$router.replace('/'+this.routers[this.n].router)
      }else if(this.oclientY-this.moclientY<100&&this.oclientY-this.moclientY>-100) {

      }else {
       // console.log("--");
        this.n=Math.max(--this.n,0);
       // console.log(this.n);
        this.$router.replace('/'+this.routers[this.n].router)
      }
    },
    mousewheel(e){
      var delta =e.deltaY;

      if(delta>0){
        this.delta1=this.delta1+delta
        if (this.delta1>750){
          //console.log(this.delta1);
          this.delta1=0;
          this.n=Math.min(++this.n,5);
          //console.log(this.n);
          this.$router.replace('/'+this.routers[this.n].router)
        }

      }
      //上滚
      if(delta<0){
        this.delta1=this.delta1+delta
        if (this.delta1<-750){
          //console.log(this.delta1);
          this.delta1=0;
          this.n=Math.max(--this.n,0);
          // console.log(this.n);
          this.$router.replace('/'+this.routers[this.n].router)
        }
      }
    }


  },
  watch:{
    "$route":function () {
      console.log('qq：283033646')
      for ( var i in this.routers) {
        if (this.$route.name==this.routers[i].router) {
          this.n=i;
        }

      }
    }

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  ul,ol,li{
    list-style: none;
  }
  a{
    text-decoration: none;
    font-family: "微软雅黑";
  }
  html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;

  }
  .wrap{
    position: absolute;
    width: 100%;
    height: 100%;

  }
  .main{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items:center;

  }
</style>
