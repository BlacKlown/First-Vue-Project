<template>
  <div class="list">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="btn-list">
          <div class="btn-wrapper">
            <div class="btn">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="btn-list">
          <div class="btn-wrapper"
            v-for="item in hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="btn">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <ul class="item-list">
          <li class="item border-bottom"
            v-for="innerItem in item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      city: 'city'
    })
  },
  mounted () {
    this.scroll = new BScroll('.list', {click: true})
  },
  watch: {
    letter () {
      if (this.letter) {
        let ele = this.$refs[this.letter][0]
        this.scroll.scrollToElement(ele)
      }
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapActions(['changeCity'])
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom,.border-bottom
    &:before,&:after
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.6rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .44rem
      padding-left: .2rem
      background-color #eee
      color: #666
      font-size: .26rem
    .btn-list
      overflow: hidden
      padding: .1rem .5rem .1rem .1rem
      .btn-wrapper
        float: left
        width: 33.33%
        .btn
          box-sizing: border-box
          width: 90%
          padding: .1rem 0
          margin: .1rem
          border: .02rem solid #ccc
          border-radius: .06rem
          text-align: center
    .item-list
      .item
        line-height .72rem
        padding-left: .2rem
</style>
