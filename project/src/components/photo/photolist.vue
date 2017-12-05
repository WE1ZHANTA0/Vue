<template>
  <div>
    <!-- 图片分类 -->
    <div class="photoCategoryStyle">
      <ul>
        <li @click="getPhotoListData(0)">全部</li>
        <li @click="getPhotoListData(v.id)" v-for="v in photoCategories" :key="v.id">{{v.title}}</li>
      </ul>
    </div>
    <!-- 图片列表 -->
    <div class="photoListStyle">
      <ul>
        <li v-for="v in photoList" :key="v.id">
          <router-link :to="'/photo/photoInfo/'+v.id">
            <img :src="v.img_url" alt="">
            <p class="titleAndZhaiyaoStyle">
              <span>{{v.title}}</span>
              <span>{{v.zhaiyao}}</span>
            </p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<style scoped>
/* 图片分类的样式 */
.photoCategoryStyle {
  overflow-x: auto;
}

.photoCategoryStyle ul {
  margin: 3px 0px;
  padding: 0px 0px 15px 0px;
  white-space: nowrap;
}

.photoCategoryStyle ul li {
  list-style: none;
  display: inline-block;
  color: #0094ff;
  margin: 0px 3px;
}

/* 图片列表样式 */
.photoListStyle ul {
  margin: 3px 0px;
  padding: 0px;
}

.photoListStyle ul li {
  list-style: none;
  position: relative;
  padding: 0px 2px;
}

img {
  /* height: 400px; */
  width: 100%;
}

.titleAndZhaiyaoStyle {
  position: absolute;
  left: 3px;
  bottom: 0px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  width: 98%;
}

.titleAndZhaiyaoStyle span:first-child {
  font-size: 16px;
  font-weight: 700;
}
</style>
   



<script>
import common from "../../common/common.js";
export default {
  data() {
    return {
      photoCategories: [], //图片分类数据
      photoList: [] //图片列表数据
    };
  },
  created() {
    this.getPhotoCategoriesDate();
    this.getPhotoListData(0);
  },
  methods: {
    // 过去图片数据
    getPhotoListData(categoryId) {
      const url = common.apihost + "api/getimages/" + categoryId;

      this.$http.get(url).then(res => {
        // console.log(res.body.message);
        this.photoList = res.body.message;
      });
    },
    // 获取分类数据
    getPhotoCategoriesDate() {
      const url = common.apihost + "api/getimgcategory";
      this.$http.get(url).then(res => {
        // console.log(res.body.message);
        this.photoCategories = res.body.message;
      });
    }
  }
};
</script>