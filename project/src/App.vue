<template>
  <div>
    <!-- 顶部 -->
    <mt-header fixed title="固定在顶部"></mt-header>
    <!-- 返回 -->
    <div @click="backTo()" v-show="isbackShow" class="backStyle" style="">&lt;返回</div>

    <!-- 路由组件 -->
    <router-view class="routerView"></router-view>

    <!-- 底部导航 -->
    <mt-tabbar :class="isTabbarShow?'':'hiddenTarBar'">
      <mt-tab-item>
        <router-link to="/home">
          <img src="http://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png">
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="category">
          <img src="http://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png">
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <img src="http://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png">
      </mt-tab-item>
      <mt-tab-item>
        <img src="http://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png">
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
.backStyle {
  position: fixed;
  left: 8px;
  top: 10px;
  font-size: 14px;
  font-weight: 700;
  color: white;
  z-index: 2;
}
.hiddenTarBar{
  display: none;
}

</style>



<style scoped>
.mint-tab-item-label img {
  width: 42px;
  height: 35px;
}
.routerView {
  margin-top: 40px;
}
</style>

<script>
export default {
  data() {
    return {
      isbackShow: false,
      isTabbarShow: true
    };
  },
  created(){
    this.toggle(this.$route.path);
  },
  methods: {
    backTo() {
      this.$router.go(-1);
    },
    toggle(path){
      if(path === '/home'){
        this.isbackShow = false;
        this.isTabbarShow = true;
      }else{
        this.isbackShow = true;
        this.isTabbarShow = false;
      }
    }
  },
  watch:{
    /**
     * 属性名代表要监控的对象
     * 值是变化后的处理函数  不能写箭头 函数因为箭头函数内部没有this
     */
    //es5
    // $route:function(newValue,oldValue){
    //   console.log(newValue)
    // }
    $route(newValue, oldValue) {
      // console.log(newValue);
      this.toggle(newValue.path);
    }
  }
};
</script>