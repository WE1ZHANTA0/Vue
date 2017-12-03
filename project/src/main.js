// 导入vue 
import Vue from 'vue'


// 导入第三方包
import Mint from 'mint-ui';//导入mint-ui
import VueRouter from 'vue-router';// 导入路由
import VueResource from 'vue-resource'//导入请求


// 导入css
import 'mint-ui/lib/style.css';// mint-ui 的css样式
import './statics/mui/css/mui.css'//导入mui的样式
import './statics/css/sites.css'//导入自己定义的css


// 导入组件
import App from './App.vue' //es6 导入App.vue
import Home from './components/home/home.vue';//首页
import Category from './components/category/category.vue';//分类
import newsList from './components/news/newsList.vue'//新闻详情页
import goodsList from './components/goods/goodslist.vue'//商品列表页
import photoList from './components/photo/photolist.vue'//照片列表

// 基于vue的包都要Use出来
Vue.use(Mint);
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/category',component:Category},
    {path:'/news/newsList',component:newsList},
    {path:'/goods/goodslist',component:goodsList},
    {path:'photo/photolist',component:photoList}
  ]
})


// 创建根实例(view-Model),让根实例显示App.vue
new Vue({
  el:'#app',
  data:{
    isShow:true
  },
  router,
  // 渲染第一次显示的组件,这个参数也是函数
  render:function(createElement){
    // 返回这个函数所带的参数是要渲染的组件
    return createElement(App)
  }
})