<template>
    <div id="Product">
      <div class="sub_banner" style="background:url(/static/images/sub_banner3.jpg) center center no-repeat; background-size:cover;"></div>
      <div class="main">
        <module-left :items="list" :itemTag="tag" :title="title" :titleUs="titleUs"></module-left>
        <div class="module_right">
          <div class="module_right_title"><span>合作案例</span><div class="module_positon"><a href="javascript:void(0)" @click="$goRoute('/')">首页</a><font>&gt;</font><i>合作案例</i></div></div>
          <div class="product_list">
            <ul>
              <li><a href="http://www.hondar.com.cn/" target="_blank"><img src="/static/images/case/1.jpg"  alt=""/></a><a href="http://www.hondar.com.cn/" target="_blank" class="product_name"><span>青海省红达尔生物科技有限公司</span></a></li>
              <li><a href="http://www.daozihui.com/" target="_blank"><img src="/static/images/case/2.jpg"  alt=""/></a><a href="http://www.daozihui.com/" target="_blank" class="product_name"><span>海南省明道书院</span></a></li>
              <li><a href="https://www.ntsey.com/" target="_blank"><img src="/static/images/case/3.jpg"  alt=""/></a><a href="https://www.ntsey.com/" target="_blank" class="product_name"><span>乌鲁木齐娜塔莎商贸有限公司</span></a></li>
              <li><a href="http://www.sangtawode.com/" target="_blank"><img src="/static/images/case/4.jpg"  alt=""/></a><a href="http://www.sangtawode.com/" target="_blank" class="product_name"><span>深圳桑塔沃德实业有限公司</span></a></li>
              <li><a href="http://www.kmfdzs.com/" target="_blank"><img src="/static/images/case/5.jpg"  alt=""/></a><a href="http://www.kmfdzs.com/" target="_blank" class="product_name"><span>昆明奉道装饰工程有限公司</span></a></li>
              <li><a href="http://www.xiaochimy.com/" target="_blank"><img src="/static/images/case/6.jpg"  alt=""/></a><a href="http://www.xiaochimy.com/" target="_blank" class="product_name"><span>上海小池贸易有限公司</span></a></li>
            </ul>
          </div>
          <div class="clearfix"></div>
          <div id="paging1" class="page light-theme simple-pagination">
            <ul>
              <li class="active"><span class="current prev">&nbsp;</span></li>
              <li class="active"><span class="current">1</span></li>
              <li class="active"><span class="current next">&nbsp;</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  const ModuleLeft = () => import('@/components/common/ModuleLeft')
export default {
  name: 'Product',
  components: {
    ModuleLeft: ModuleLeft
  },
  data() {
    return {
      list: [
        {name: '合作案例', url: 'product'}
      ],
      title: '合作案例',
      titleUs: 'COOPERATION CASE',
      tag: 'product'
    }
  }
}
</script>
<style>

</style>
