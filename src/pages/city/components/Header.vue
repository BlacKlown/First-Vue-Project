<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont icon-back"></div>
    </router-link>
    <div class="header-text">城市选择</div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~css/reset.styl'
  .header
    position: relative
    line-height: .86rem
    color: #fff
    background-color: $headerColor
    .icon-back
      position: absolute
      top: 0
      left: .12rem
      font-size: .4rem
      color: #fff
    .header-text
      text-align: center
      font-size: .32rem
</style>
