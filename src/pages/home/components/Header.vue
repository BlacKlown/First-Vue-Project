<template>
<div class="header">
  <div class="header-left"><div class="iconfont icon-back"></div></div>
  <div class="header-input"><i class="iconfont icon-select"></i>输入城市/景点/游玩主题</div>
  <div class="header-right">城市<i class="iconfont icon-arrow"></i></div>
</div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~css/reset.styl'
  .header
    display: flex
    line-height: .86rem
    color: #fff
    background-color: $headerColor
    .header-left
      width: .64rem
      text-align: center
      .icon-back
        font-size: .4rem
    .header-input
      flex: 1
      height: .62rem
      line-height: .62rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      color: #ccc
      background-color: #fff
      border-radius: .1rem
    .header-right
      width: 1.24rem
      text-align: center
      .icon-arrow
        font-size: .24rem
</style>
