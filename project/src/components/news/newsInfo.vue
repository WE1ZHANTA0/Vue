<template>
  <div>
    <!-- 标题部分 -->
    <div class="titleStyle">
      <h4>{{this.newsInfoData.title}}</h4>
      <p>
        <span>{{newsInfoData.add_time|fmtDate}}</span>&nbsp;&nbsp;
        <span>{{newsInfoData.click}}次浏览</span>&nbsp;&nbsp;
        <span>分类:民生经济</span>
      </p>
    </div>
    <!-- 内容部分 -->
    <div class="contentStyle">
      <p v-html="newsInfoData.content"></p>
    </div>


    <!-- 评论组件 -->
    <subcomment :commentId='this.$route.params.newsId'></subcomment>
  </div>
</template>


<style scoped>
  .titleStyle,.contentStyle{
    padding: 8px;
  }
  .titleStyle{
    border-bottom: 1px solid rgba(92,92,92,92);
  }
  h4{
    color: #0094ff;
    font-size: 16px;
  }
</style>



<script>
  import common from '../../common/common.js'

  // 导入评论组件
  import subcoment from '../subcomponents/subcomment.vue';

  export default{
    data(){
      return{
        newsInfoData:{}
      }
    },
    created(){
      this.getData()
    },
    methods:{
      // 获取详情页
      getData(){
        const url = common.apihost+'api/getnew/'+this.$route.params.newsId;
        // console.log(url);
        this.$http.get(url).then(res=>{
          // console.log(res);
          this.newsInfoData = res.body.message[0];
        })
      }
    },
    components:{
      subcomment:subcoment//属性名称是在template中使用的标签名
    }
  }
</script>