<template>
  <div>
    <ul class="mui-table-view">
      <li v-for="(v,i) in newsArray" :key="v.id" class="mui-table-view-cell mui-media">
        <router-link :to="'/news/newsInfo/'+v.id">
          <img class="mui-media-object mui-pull-left" :src="v.img_url">
          <div class="mui-media-body">
            <p class="titleStyle">{{v.title}}</p>
            <p class="mui-ellipsis">
              <span>{{v.add_time|fmtDate('YYYY-MM-DD HH:mm')}}</span>
              <span>点击数{{v.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<style scoped>
.mui-table-view-cell{
  height: 80px;
}
.mui-table-view-cell .mui-pull-left{
  min-width: 65px;
  height: 65px;
}
.titleStyle {
  font-size: 14px;
  color: gray;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mui-ellipsis{
  margin-top: 20px;
  color: #0094ff;
  font-size: 12px;
}
.mui-ellipsis > span {
  color: #0094ff;
  font-size: 12px;
}
.mui-ellipsis > span:first-of-type {
  float: left;
}
.mui-ellipsis > span:last-of-type {
  float: right;
}
</style>


<script>

import common from '../../common/common.js';

export default {
  data() {
    return {
      newsArray: [] //定义初始化数据格式
    };
  },
  created() {
    this.getNewsData();
  },
  methods: {
    // 向后台请求新闻列表数据
    getNewsData() {
      const url = common.apihost+"api/getnewslist";
      this.$http.get(url).then(res => {
        // console.log(res);
        this.newsArray = res.body.message;
      });
    }
  }
};
</script>