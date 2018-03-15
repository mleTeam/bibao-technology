<template>
    <div id="ModuleLeft">
      <div class="module_left">
        <div class="module_left_title"><span>{{title}}</span><font class="font_num">{{titleUs}}</font></div>
        <div class="module_menu">
          <ul>
            <li :class="{ on : item.url == choose }" v-for="(item,index) in items" :key="index"><a @click="$goRoute(item.url)">{{item.name}}</a></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ModuleLeft',
  data() {
    return {
      choose: this.itemTag
    }
  },
  props: {
    items: {
      type: Array
    },
    itemTag: {
      type: String
    },
    title: {
      type: String
    },
    titleUs: {
      type: String
    }
  },
  watch: {
    itemTag(val = 0) {
      this.choose = val
    }
  }
}
</script>

<style>

</style>
