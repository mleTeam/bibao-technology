<template>
    <div id="ContactUs_index">
      <div class="sub_banner" style="background:url(/static/images/sub_banner6.jpg) center center no-repeat; background-size:cover;"></div>
      <div class="main">
        <module-left :items="list" :itemTag="tag" :title="title" :titleUs="titleUs"></module-left>
        <router-view/>
      </div>
    </div>
</template>

<script>
  const ModuleLeft = () => import('@/components/common/ModuleLeft')
export default {
  name: 'ContactUs_index',
  components: {
    ModuleLeft: ModuleLeft
  },
  data() {
    return {
      list: [
        {name: '联系我们', url: 'address'},
        {name: '诚聘英才', url: 'employment'}
      ],
      title: '联系我们',
      titleUs: 'CONTACT US',
      tag: ''
    }
  },
  created() {
    let self = this
    let path = self.$route.path
    self.tag = path.substring(11)
  },
  watch: {
    $route() {
      let self = this
      let path = self.$route.path
      self.tag = path.substring(11)
    }
  }
}
</script>

<style>

</style>
