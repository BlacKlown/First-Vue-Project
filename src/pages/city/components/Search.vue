<template>
  <div>
    <div class="search-input-wrapper">
      <input v-model="keyword" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-list-wrapper" v-show="keyword">
      <ul class="search-list">
        <li class="list-item border-bottom" v-for="item in list" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((item) => {
            if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
              result.push(item)
            }
          })
        }
        if (!result.length) {
          result[0] = {
            id: 0,
            name: '没有找到匹配项'
          }
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll('.search-list-wrapper')
  }
}
</script>

<style lang="stylus" scoped>
  @import '~css/reset.styl'
  .search-input-wrapper
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
  .search-list-wrapper
    overflow: hidden
    position: absolute
    top: 1.6rem
    left: 0
    right: 0
    bottom: 0
    z-index: 1
    background-color: #eee
    .list-item
      padding-left: .1rem
      line-height: .72rem
      background-color: #fff
</style>
