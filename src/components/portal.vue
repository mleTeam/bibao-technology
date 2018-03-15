<template>
    <div id="Portal">
      <common-header></common-header>
      <router-view/>
      <common-bottom></common-bottom>
    </div>
</template>

<script>
  const Bottom = () => import('@/components/common/Bottom')
  const Header = () => import('@/components/common/Header')
export default {
  name: 'Portal',
  components: {
    CommonHeader: Header,
    CommonBottom: Bottom
  }
}
</script>

<style>

</style>
