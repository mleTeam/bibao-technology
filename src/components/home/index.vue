<template>
  <div id="Home_index">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
      </div>
      <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
    <div class="main">
      <div class="index_news">
        <div class="news_title"><span>新闻中心</span><font class="font_num">NEWS</font><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews')">更多</a></div>
        <div class="news_list1 clearfix">
          <a href="javascript:void(0)" @click="$goRoute('/news/tradeNews/10/detail')"><img src="/static/images/news1.jpg"/><span>定制版网站年代——论如何建设精美实用的网站</span><font>很多站长在进行网站建设的时候，内心偶尔也会感叹，怎么别人家的网站就做的那么精美呢？一个精美又实用的网站真的...</font></a>
        </div>
        <div class="news_cont">
          <ul>
            <li><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews/9/detail')"><font>作为SEO的基础，网站结构优化极为重要</font><span>2018-01-06</span></a></li>
            <li><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews/8/detail')"><font>四大网站建设中要注意的问题</font><span>2017-12-03</span></a></li>
            <li><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews/7/detail')"><font>论如何利用网站“关于我们”有效提升企业形象</font><span>2017-11-15</span></a></li>
            <li><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews/6/detail')"><font>做网站，首先要明白一个响应式的网站设计的优势</font><span>2017-10-02</span></a></li>
            <li><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews/5/detail')"><font>做好友情链接能对网站优化带来的影响</font><span>2017-09-08</span></a></li>
          </ul>
        </div>
      </div>
      <div class="index_about">
        <div class="module_title btm_line"><span>公司介绍</span><font class="font_num">ABOUT US</font>
          <a href="javascript:void(0)" @click="$goRoute('/aboutUs/company')">更多</a></div>

        <div class="about_cont" id="about_content"><!--<div class="dot">...<a href="###">更多</a></div>-->
          <br>杭州壁宝科技—全方位的互联网服务提供商。<br>
          <br>
          壁宝科技，是专注于网站建设，响应式网站制作和品牌传播的网站开发公司！多年的磨练，使我们在创意设计，营销推广到网站研发都拥有丰富的经验，我们擅长倾听企业需求，挖掘品牌核心价值，整合高质量设计和最新技术，为您打造有价值的创意设计体验。<br>
          <br>
          核心团队拥有超过10年行业经验的资深团队，涵盖创意，策略，技术等各领域专业人才，我们坚信每一个成功项目是良好团队合作的成果！
        </div>
        <img src="/static/images/about_pic.jpg" width="245" height="315" alt=""/></div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';

  export default {
    name: 'Home_index',
    data() {
      return {
        listImg: [
          {url: '/static/images/banner/banner.jpg'},
          {url: '/static/images/banner/jiuxi_banner2.jpg'},
          {url: '/static/images/banner/jiuxi_banner3.jpg'}]
      }
    },
    mounted() {
      let swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        speed: 600,
        autoplay: 4000,
        onTouchEnd: function () {
          swiper.startAutoplay()
        }
      });
    }
  }
</script>

<style type="text/css">
  .swiper-pagination-bullet {
    width: 18px;
    height: 18px;
  }

  .swiper-container {
    position: relative;
    width: 100%;
    height: 500px;
  }

</style>
