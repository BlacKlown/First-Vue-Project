<template>
  <div>
    <input type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~css/reset.styl'
  div
    background-color: $headerColor
    padding: 0 .1rem .1rem
    input
      box-sizing: border-box
      width: 100%
      line-height: .64rem
      padding: 0 .1rem
      border-radius: .06rem
      text-align: center
      color: #666
</style>
