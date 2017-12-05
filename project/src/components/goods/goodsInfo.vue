<template>
  <div>
    <!-- 轮播图子组件 -->
    <div class="lunboStyle">
      <subswipe :lunbo_url="'api/getthumimages/'+this.$route.params.goodsId" :lunbo_time="time"></subswipe>
    </div>

    <!-- 商品信息 -->
    <div class="goodsInfoStyle">
      <h4>{{goodsInfo.title}}</h4>
      <p>市场价:
        <del>￥{{goodsInfo.market_price}}</del>&nbsp;&nbsp;销售价:
        <span style="color:red;font-size:16px;">{{goodsInfo.sell_price}}</span>
      </p>
      <!-- 数量选择子组件 -->
      <subnumber v-on:countChange="getChangeCount"></subnumber>
      <mt-button type="primary" size="normal">立即购买</mt-button>
      <mt-button type="danger" @click="addToShopCart()" size="normal">加入购物车</mt-button>
    </div>
    <!-- 商品参数 -->
    <div class="goodsParams">
      <h5>商品参数</h5>
      <ul>
        <li>商品货号:{{goodsInfo.goods_no}}</li>
        <li>库存情况:{{goodsInfo.stock_quantity}}件</li>
        <li>上架时间:{{goodsInfo.add_time | fmtDate}}</li>
      </ul>
    </div>

    <div class="pictureAndComment">
      <mt-button type="primary" @click="goToPictureAndText()" plain size="large">图文介绍</mt-button>
      <mt-button style="margin-top:15px;" @click="goToGoodsComment()" type="danger" plain size="large">商品评论</mt-button>
    </div>
  </div>
</template>

<style scoped>
.lunboStyle,
.goodsInfoStyle,
.goodsParams,
.pictureAndComment {
  margin: 8px;
  border-radius: 8px;
  padding: 8px;
  border: 1px solid rgba(92, 92, 92, 0.3);
}

h4 {
  border-bottom: 1px solid rgba(92, 92, 92, 0.3);
  padding-bottom: 10px;
  color: #0094ff;
  font-size: 16px;
}

h5 {
  border-bottom: 1px solid rgba(92, 92, 92, 0.3);
  padding-bottom: 10px;
}

.goodsParams ul li {
  list-style: none;
  font-size: 14px;
}

.goodsParams ul {
  padding: 3px;
  margin: 3px 0px;
}
</style>

<script>
import common from "../../common/common.js";
// 轮播子组件
import subswipe from "../subcomponents/subswipe.vue";
//数字框子组件
import subnumber from "../subcomponents/subnumber.vue";

export default {
  data() {
    return {
      goodsInfo: {},
      time: 2000, //轮播时间间隔
      goodsCount: 1 //购买商品数量的默认值
    };
  },
  created() {
    this.InfoData();
  },
  methods: {
    // 获取详情数据
    InfoData() {
      const url =
        common.apihost + "api/goods/getinfo/" + this.$route.params.goodsId;
      this.$http.get(url).then(res => {
        // console.log(res.body.message);
        this.goodsInfo = res.body.message[0];
      });
    },
    // 数字搜索框改变事件
    getChangeCount(count) {
      this.goodsCount = count;
    },
    // 加入购物车
    addToShopCat() {},
    //到图文详情
    goToPictureAndText() {
      this.$router.push({
        path: "/goods/pictureAndText",
        query: { goodsId: this.$route.params.goodsId }
      });
    },
    //跳转到商品评论组件中去
    goToGoodsComment() {
      // 带查询参数，
      this.$router.push({
        path: "/goods/goodscomment",
        query: { goodsId: this.$route.params.goodsId }
      });
    }
  },
  components: {
    subswipe,
    subnumber
  }
};
</script>
