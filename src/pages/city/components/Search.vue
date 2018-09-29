<template>
  <div>
    <div class="search-input-wrapper">
      <input v-model="keyword" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-list-wrapper" v-show="keyword">
      <ul class="search-list">
        <li class="list-item border-bottom"
          v-for="item in list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="list-item border-bottom" v-if="show">没有找到匹配项</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'

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
  computed: {
    show () {
      return !this.list.length
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
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll('.search-list-wrapper')
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations({
      changeCity: 'changeCity'
    })
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
