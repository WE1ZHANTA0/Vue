
// 导入第三方包

// 导入vue 
import Vue from 'vue'


// 导入App.vue
import App from './App.vue' //es6



// 创建根实例(view-Model),让根实例显示App.vue
new Vue({
  el:'#app',
  // 渲染第一次显示的组件,这个参数也是函数
  render:function(createElement){
    // 返回这个函数所带的参数是要渲染的组件
    return createElement(App)
  }
})