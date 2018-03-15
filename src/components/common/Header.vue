<template>
  <div id="Header">
    <nav>
      <div class="nav_bar"><a href="javascript:void(0)" @click="$goRoute('/')" class="logo"></a>
        <div class="nav">
          <ul>
            <li :class="{ on : choose == '' }"><a href="javascript:void(0)" @click="$goRoute('/')"><span>首页</span></a></li>
            <li :class="{ on : choose == 'aboutUs' }"><a href="javascript:void(0)" @click="$goRoute('/aboutUs/company')"><span>关于我们</span></a>
              <div class="sub_nav">
                <dl>
                  <dd><a href="javascript:void(0)" @click="$goRoute('/aboutUs/company')">公司简介</a></dd>
                  <dd><a href="javascript:void(0)" @click="$goRoute('/aboutUs/enterprise')">企业文化</a></dd>
                  <dd><a href="javascript:void(0)" @click="$goRoute('/aboutUs/team')">核心团队</a></dd>
                </dl>
              </div>
            </li>
            <li :class="{ on : choose == 'news' }"><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews')"><span>新闻中心</span></a>
              <div class="sub_nav">
                <dl>
                  <dd><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews')">行业新闻</a></dd>
                  <dd><a href="javascript:void(0)" @click="$goRoute('/news/notice')">公司公告</a></dd>
                </dl>
              </div>
            </li>
            <li :class="{ on : choose == 'product' }"><a href="javascript:void(0)" @click="$goRoute('/product')"><span>合作案例</span></a></li>
            <li :class="{ on : choose == 'contactUs' }"><a href="javascript:void(0)" @click="$goRoute('/contactUs/address')"><span>联系我们</span></a>
              <div class="sub_nav">
                <dl>
                  <dd><a href="javascript:void(0)" @click="$goRoute('/contactUs/address')">联系我们</a></dd>
                  <dd><a href="javascript:void(0)" @click="$goRoute('/contactUs/employment')">诚聘英才</a></dd>
                </dl>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        choose: ""
      }
    },
    methods: {
      chooseMenu() {
        let self = this
        let url = this.$route.path
        let arr = url.split("/");
        self.choose = arr[1]
      }
    },
    created() {
      let self = this
      self.chooseMenu()
    },
    watch: {
      $route() {
        let self = this
        self.chooseMenu()
      }
    }
  }
</script>

<style>

</style>
