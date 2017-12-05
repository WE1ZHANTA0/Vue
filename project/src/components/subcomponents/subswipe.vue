<template>
  <div>
    <mt-swipe :auto="lunbo_time">
      <mt-swipe-item v-for="(item,index) in swipeData" :key="index">
        <img :src="item.src" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<style scoped>
    /* 轮播图样式 */
   .mint-swipe {
        width: 100%;
        height: 250px;
    }

    img {
        width: 100%;
        height: 100%;
    }
</style>

<script>
import common from '../../common/common.js';
export default {
  data(){
    return{
      swipeData:[]
    }
  },
  props:['lunbo_url','lunbo_time'],
  created(){
    this.getData();
  },
  methods:{
    getData(){
      const url = common.apihost+this.lunbo_url;
      this.$http.get(url).then(res=>{
        // console.log(res);
        this.swipeData = res.body.message;
      })
    }
  }
};
</script>