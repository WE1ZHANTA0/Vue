// 导入vue 
import Vue from 'vue'


// 导入第三方包
import Mint from 'mint-ui';//导入mint-ui
import VueRouter from 'vue-router';// 导入路由
import VueResource from 'vue-resource'//导入请求
import moment from 'moment'//导入时间包


// 导入css
import 'mint-ui/lib/style.css';// mint-ui 的css样式
import './statics/mui/css/mui.css'//导入mui的样式
import './statics/css/sites.css'//导入自己定义的css


// 导入组件
import App from './App.vue' //es6 导入App.vue
import Home from './components/home/home.vue';//首页
import Category from './components/category/category.vue';//分类
import newsList from './components/news/newsList.vue'//新闻列表页
import goodsList from './components/goods/goodslist.vue'//商品列表页
import photoList from './components/photo/photolist.vue'//照片列表
import newsInfo from './components/news/newsInfo.vue'//新闻详情页
import photoInfo from './components/photo/photoInfo.vue'//照片详情页
import goodsInfo from './components/goods/goodsInfo.vue'//商品详情
import pictureAndText from './components/goods/pictureAndText.vue'//图文详情

// 基于vue的包都要Use出来
Vue.use(Mint);
Vue.use(VueRouter);
Vue.use(VueResource);



// 穿件全局过滤器修改时间格式
Vue.filter('fmtDate',(input,formatString)=>{
  // 最终的格式
  const lastFormatString = formatString || "YYYY-MM-DD HH:mm:ss"

  /**
   * 第一个参数是需要修改的时间
   * 第二个参数是修改的格式
   */
  return moment(input).format(lastFormatString);
})

Vue.filter('goDate',(input)=>{
  moment.locale('zh-cn');
  var date = moment(input).format('YYYY-MM-DD HH:mm:ss');
  return moment(date).startOf('minutes').fromNow();
})


const router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/category',component:Category},
    {path:'/news/newsList',component:newsList},
    {path:'/goods/goodslist',component:goodsList},
    {path:'/photo/photolist',component:photoList},
    {path:'/news/newsInfo/:newsId',component:newsInfo},
    {path:'/photo/photoInfo/:photoId',component:photoInfo},
    {path:'/goods/goodsInfo/:goodsId',component:goodsInfo},
    {path:'/goods/pictureAndText',component:pictureAndText}
  ]
})


// 创建根实例(view-Model),让根实例显示App.vue
new Vue({
  el:'#app',
  router,
  // 渲染第一次显示的组件,这个参数也是函数
  render:function(createElement){
    // 返回这个函数所带的参数是要渲染的组件
    return createElement(App)
  }
})