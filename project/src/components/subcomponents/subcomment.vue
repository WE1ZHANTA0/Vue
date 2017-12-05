<template>
  <div>
    <!-- 提交评论区域 -->
    <div class="submitCommentStyle">
      <h4>提交评论</h4>
      <textarea ref='textarea' name="" id="" cols="10" rows="7" placeholder="请输入评论内容"></textarea>
      <mt-button @click="addComment()" size="large" type="primary">提交评论</mt-button>
    </div>
    <!-- 评论列表区域 -->
    <div class="commentListStyle">
      <h4>评论列表</h4>
      <div v-for="(v,i) in commentList" :key="i" class="commentItemStyle">
        <p class="titleStyle">{{v.content}}</p>
        <p class="commentUserAndTimeStyle">
          <span>匿名用户</span>
          <span>{{v.add_time|goDate()}}</span>
        </p>
      </div>
      <mt-button @click="loadMore()" class="loadMoreStyle" plain type='danger' size='large'>加载更多</mt-button>
    </div>
  </div>
</template>

<style scoped>
.submitCommentStyle,
.commentListStyle {
  padding: 8px;
}

h4 {
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(92, 92, 92, 0.3);
}

.commentItemStyle {
  height: 100px;
  border-bottom: 1px solid rgba(92, 92, 92, 0.3);
  position: relative;
}

.titleStyle {
  margin-top: 5px;
  font-size: 15px;
  color: black;
  display: block;
  overflow-y: auto;
  height: 70px;
}

.commentUserAndTimeStyle {
  /* margin-top: 40px; */
  position: absolute;
  display: block;
  bottom: 0px;
  color: #0094ff;
}
.commentUserAndTimeStyle span:last-child {
  margin-left: 215px;
}

.loadMoreStyle {
  margin-top: 15px;
}
</style>
   



<script>

import common from '../../common/common.js';

import { Toast } from 'mint-ui'

export default {
  data(){
    return{
      pageIndex:1,
      commentList:[]
    }
  },
  props: ["commentId"], //在子组件中接收父组件的值
  created(){
    this.getCommentListData();
  },
  methods:{
    // 获取列表数据
    getCommentListData(){
      const url = common.apihost+'api/getcomments/'+this.commentId+'?pageindex='+this.pageIndex;
      // console.log(url);
      this.$http.get(url).then(res=>{
        console.log(res);
        // 如果本来是第一页就直接赋值
        if(this.pageIndex==1){
          this.commentList = res.body.message;
        }else{
          // 如果不是就叠加
          this.commentList = this.commentList.concat(res.body.message);
        }
      })
    },
    // 获取更多数据
    loadMore(){
      this.pageIndex++;
      this.getCommentListData();
    },
    // 添加评论
    addComment(){
      // 获取textarea的值
      const commentContent = this.$refs.textarea.value;
      // console.log(commentContent);
      if(commentContent.trim() == ''|| commentContent.trim().length==0){
        Toast({
            message: '请输入要评论的内容',
            position: 'middel',
            duration: 2000
          });
          return
      }
      const url = common.apihost+'api/postcomment/'+this.commentId;
      this.$http.post(url,{content:commentContent},{emulateJSON:true}).then(res=>{
        // 清空文本框
        this.$refs.textarea.value = '';
        // 提示
         Toast({
            message: res.body.message,
            position: 'middle',
            duration: 3000
        });
        // 重新加载第一页
        this.pageIndex = 1;
        this.getCommentListData();
      })
    }
  }
};
</script>
