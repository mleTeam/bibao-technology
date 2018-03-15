<template>
    <div id="Address" class="module_right">
      <div class="module_right_title"><span>联系我们</span><div class="module_positon"><a href="javascript:void(0)" @click="$goRoute('/')">首页</a><font>&gt;</font><a href="javascript:void(0)" @click="$goRoute('/contactUs/address')">联系我们</a><font>&gt;</font><i>联系我们</i></div></div>
      <div class="module_cont">
        <div id="milkMap"></div>
        <p>地址：杭州市拱墅区余杭塘路515号矩阵国际5-201</p>
      </div>
    </div>
</template>

<script>
  import BMap from 'BMap'
export default {
  name: 'Address',
  mounted() {
    var map = new BMap.Map("milkMap");          // 创建地图实例
    var point = new BMap.Point(120.115327,30.299476);  // 创建点坐标
    map.centerAndZoom(point, 17);                 // 初始化地图，设置中心点坐标和地图级别
    map.setCurrentCity("杭州市");  //设置当前城市
    var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);              // 将标注添加到地图中
    var label = new BMap.Label("杭州市拱墅区余杭塘路515号矩阵国际5-201",{offset:new BMap.Size(10,10)});
    marker.setLabel(label);
  }
}
</script>

<style>
  #milkMap{ width:870px; height:400px; margin-bottom:30px;}
  #milkMap .BMapLabel{background-color:#f89c21!important; color:#fff; border:0!important; padding:5px 10px!important; }
</style>
