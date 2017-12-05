<template>
  <div>
    <div style="margin-bottom:8px;">
      <div @click="subtract()" class="left">-</div>
      <div class="middle">{{count}}</div>
      <div @click="add()" class="right">+</div>
    </div>
  </div>
</template>

<style scoped>
.left,
.middle,
.right {
  display: inline-block;
  border: 1px solid rgba(92, 92, 92, 0.3);
  width: 35px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}

.middle {
  width: 40px;
}
</style>

<script>
export default {
  data() {
    return {
      count: 1
    };
  },
  methods:{
    // 减
    subtract(){
      if(this.count<=1) return;
      this.count--;
      this.notify()
    },
    //加
    add(){
      this.count++
      this.notify()
    },
    // 传值
    notify(){
      /**
      *参数一:事件名称
      *参数二:传递的值
       */
       this.$emit('countChange',this.count);
    }
  }
};
</script>