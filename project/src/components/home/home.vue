<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="(v,i) in lunboArray" :key="i">
        <img :src="v.img" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 导航 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/news/newslist">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻咨询</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/photo/photolist">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/goods/goodslist/">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>


<style scoped>
.mint-swipe {
  height: 250px;
}

img {
  height: 100%;
  width: 100%;
}
/* 去掉mui的字体图标 */
.mui-icon::before {
  content: "";
}
.mui-icon {
  width: 50px;
  height: 50px;
}

.mui-icon-home {
  background-image: url("../../statics/images/menu3.png");
  background-size: cover;
}

.mui-icon-email {
  background-image: url("../../statics/images/menu4.png");
  background-size: cover;
}

.mui-icon-chatbubble {
  background-image: url("../../statics/images/menu5.png");
  background-size: cover;
}

.mui-icon-location {
  background-image: url("../../statics/images/menu6.png");
  background-size: cover;
}

.mui-icon-search {
  background-image: url("../../statics/images/menu9.png");
  background-size: cover;
}

.mui-icon-phone {
  background-image: url("../../statics/images/menu10.png");
  background-size: cover;
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
</style>



<script>

import common from '../../common/common.js';

export default {
  data() {
    return {
      lunboArray: [] //设置轮播图所需要的数据原始模型
    };
  },
  // 这个方法是Vue的生命周期方法之一,当我们实现了之后 当home.vue被创建出来的时候就会自动调用
  created() {
    this.$root.isShow = true;
    // console.log(this);
    // 在这里调用请求函数
    this.getLunboData();
  },
  methods: {
    // 向后台请求轮播图数据
    getLunboData() {
      const url = common.apihost+"api/getlunbo";
      this.$http.get(url).then(res => {
        // console.log(res);
        this.lunboArray = res.body.message;
      });
    }
  }
};
</script>