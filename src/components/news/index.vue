<template>
    <div id="News">
      <div class="sub_banner" style="background:url(/static/images/sub_banner2.jpg) center center no-repeat; background-size:cover;"></div>
      <div class="main">
        <module-left :items="list" :itemTag="tag" :title="title" :titleUs="titleUs"></module-left>
        <router-view/>
      </div>
    </div>
</template>

<script>
  const ModuleLeft = () => import('@/components/common/ModuleLeft')
export default {
  name: 'News',
  components: {
    ModuleLeft: ModuleLeft
  },
  data() {
    return {
      list: [
        {name: '行业新闻', url: '/news/tradeNews'},
        {name: '公司公告', url: '/news/notice'}
      ],
      title: '新闻中心',
      titleUs: 'NEWS',
      tag: ''
    }
  },
  created() {
    let self = this
    let path = self.$route.path
    let index = path.indexOf("/",6)
    if( -1 == index) {
      self.tag = path.substring(0)
    }else{
      self.tag = path.substring(0,index)
    }
  },
  watch: {
    $route() {
      let self = this
      let path = self.$route.path
      let index = path.indexOf("/",6)
      if( -1 == index) {
        self.tag = path.substring(0)
      }else{
        self.tag = path.substring(0,index)
      }
    }
  }
}
</script>

<style>

</style>
