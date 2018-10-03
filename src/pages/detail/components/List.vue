<template>
  <div>
    <div
      class="items"
      v-for="(item, index) in list"
      :key="index"
    >
      <div class="item border-bottom">
        <div class="item-img"></div>
        <div class="item-title">
          {{item.title}}
        </div>
      </div>
      <list class="item-children" v-if="item.children" :list="item.children"></list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item
    height: .8rem
    line-height: .8rem
    font-size: .32rem
    .item-img
      float: left
      width: .36rem
      height: .36rem
      margin: .22rem .14rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      background-size: .4rem 3rem
  .item-children
    padding: 0 .2rem 
</style>
