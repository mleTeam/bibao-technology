<template>
  <div id="Bottom">
    <div class="bottom">
      <div class="btm_cont clearfix">
        <div class="btm_left">
          <div class="btm_menu">
            <ul>
              <li><a href="javascript:void(0)" @click="$goRoute('/aboutUs/company')">关于我们</a>
                <div class="btm_sub_menu">
                  <dl>
                    <dd><a href="javascript:void(0)" @click="$goRoute('/aboutUs/company')">公司简介</a></dd>
                    <dd><a href="javascript:void(0)" @click="$goRoute('/aboutUs/enterprise')">企业文化</a></dd>
                    <dd><a href="javascript:void(0)" @click="$goRoute('/aboutUs/team')">核心团队</a></dd>
                  </dl>
                </div>
              </li>
              <li><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews')">新闻中心</a>
                <div class="btm_sub_menu">
                  <dl>
                    <dd><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews')">行业新闻</a></dd>
                    <dd><a href="javascript:void(0)" @click="$goRoute('/news/notice')">公司公告</a></dd>
                  </dl>
                </div>
              </li>
              <li><a href="javascript:void(0)" @click="$goRoute('/product')">合作案例</a></li>
              <li><a href="javascript:void(0)" @click="$goRoute('/contactUs/address')">联系我们</a>
                <div class="btm_sub_menu">
                  <dl>
                    <dd><a href="javascript:void(0)" @click="$goRoute('/contactUs/address')">联系我们</a></dd>
                    <dd><a href="javascript:void(0)" @click="$goRoute('/contactUs/employment')">诚聘英才</a></dd>
                  </dl>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="btm_right">
          <div class="btm_contact"><span><strong>公司地址</strong><br>
杭州市拱墅区余杭塘路515号矩阵国际5-201<br><br>

<strong>工作时间</strong><br>
 9:00-18:00</span></div>


        </div>

      </div>
      <div class="copy_right"><span>版权所有 © 2017 壁宝科技网络有限公司 <a href="###">浙ICP备14020449号-3</a></span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Bottom',
    data() {
      return {
        msg: 'this is bottom'
      }
    }
  }
</script>

<style scoped>

</style>
