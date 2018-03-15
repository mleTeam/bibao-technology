<template>
    <div id="tradeNews" class="module_right">
      <div class="module_right_title"><span>行业新闻</span><div class="module_positon"><a href="javascript:void(0)" @click="$goRoute('/')">首页</a><font>&gt;</font><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews')">新闻中心</a><font>&gt;</font><i>行业新闻</i></div></div>

      <div class="module_list">
        <ul>
          <li><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews/10/detail')"><span>定制版网站年代——论如何建设精美实用的网站</span><font>2018-02-01</font></a></li>
          <li><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews/9/detail')"><span>作为SEO的基础，网站结构优化极为重要</span><font>2018-01-06</font></a></li>
          <li><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews/8/detail')"><span>四大网站建设中要注意的问题</span><font>2017-12-03</font></a></li>
          <li><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews/7/detail')"><span>论如何利用网站“关于我们”有效提升企业形象</span><font>2017-11-15</font></a></li>
          <li><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews/6/detail')"><span>做网站，首先要明白一个响应式的网站设计的优势</span><font>2017-10-02</font></a></li>
          <li><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews/5/detail')"><span>做好友情链接能对网站优化带来的影响</span><font>2017-09-08</font></a></li>
          <li><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews/4/detail')"><span>“闪电算法”——一种新的百度算法</span><font>2017-08-26</font></a></li>
          <li><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews/3/detail')"><span>论网站建设中不同类型的网站以及如何做好一个网站</span><font>2017-08-03</font></a></li>
          <li><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews/2/detail')"><span>干货——略谈网站被黑客攻击的种类及其应对方法</span><font>2017-07-15</font></a></li>
          <li><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews/1/detail')"><span>做谷歌排名要知道的影响因素之——网站域名</span><font>2017-07-01</font></a></li>
        </ul>
      </div>
      <div id="paging1" class="page light-theme simple-pagination">
        <ul>
          <li class="active"><span class="current prev">&nbsp;</span></li>
          <li class="active"><span class="current">1</span></li>
          <li class="active"><span class="current next">&nbsp;</span></li>
        </ul>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'tradeNews'
}
</script>

<style>

</style>
