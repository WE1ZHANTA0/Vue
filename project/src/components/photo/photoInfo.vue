<template>
  <div>
    <!-- 标题部分 -->
    <div class="titleStyle">
      <h4>{{photoInfo.title}}</h4>
      <p>{{photoInfo.add_time|fmtDate()}}&nbsp;&nbsp;{{photoInfo.click}}次浏览</p>
    </div>

    <!-- 缩略图部分 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li v-for="(v,i) in photoImages" :key="i" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <img class="preview-img" height="100" :src="v.src" alt="">
        </li>
      </ul>
    </div>
    <!-- 内容部分 -->
    <div class="contentStyle">
      <p v-html="photoInfo.content"></p>
    </div>
    <!-- 评论子组件 -->
     <subcomment :commentId="this.$route.params.photoId"></subcomment>
  </div>
</template>


<style scoped>
.titleStyle,
.contentStyle {
  padding: 6px;
}

h4 {
  font-size: 16px;
  color: #0094ff;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0px;
}
</style>


<script>
import common from "../../common/common.js";

import subcomment from '../subcomponents/subcomment.vue';

export default {
  data() {
    return {
      photoInfo: {}, //图片详情数据
      photoImages: [] //图片的缩略图
    };
  },
  created() {
    this.ImagesData();
    this.InfoData();
  },
  methods: {
    ImagesData() {
      const url =
        common.apihost + "api/getthumimages/" + this.$route.params.photoId;
      // console.log(url);
      this.$http.get(url).then(res => {
        // console.log(res);
        this.photoImages = res.body.message;
      });
    },
    InfoData() {
      const url =
        common.apihost + "api/getimageInfo/" + this.$route.params.photoId;
      this.$http.get(url).then(res => {
        // console.log(res.body.message[0]);
        this.photoInfo = res.body.message[0];
        // console.log(this.InfoDatas);
      });
    }
  },
  components:{
    subcomment
  }
};
</script>