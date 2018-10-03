<template>
  <div>
    <router-link tag="div" to="/" class="detail-header-abs" v-if="show">
      <div class="iconfont icon-back"></div>
    </router-link>
    <div class="detail-header-fixed" :style="opacity" v-if="!show">
      <router-link tag="div" to="/" class="detail-header-left">
        <div class="iconfont icon-back"></div>
      </router-link>
      <div class="detail-header-title">景点信息</div>
    </div>
    <div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>
  </div>

</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      show: true,
      opacity: {
        opacity: 0
      }
    }
  },
  methods: {
    handleWindowScroll (e) {
      const Top = document.documentElement.scrollTop
      if (Top > 0) {
        let opacity = Top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.show = false
        this.opacity = { opacity }
      } else {
        this.show = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleWindowScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleWindowScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~css/reset.styl'
  .detail-header-abs
    position: absolute
    top: .1rem
    left: .1rem
    height: .7rem
    width: .7rem
    border-radius: .35rem
    background-color: rgba(0, 0, 0, .6)
    line-height: .7rem
    text-align: center
    color: #fff
    .iconfont
      font-size: .4rem
  .detail-header-fixed
    position: fixed
    top: 0
    left: 0
    right: 0
    height: .86rem
    background-color: $headerColor
    line-height: .86rem
    color: #fff
    text-align: center
    .detail-header-left
      position: absolute
      left: .2rem
      .iconfont
        font-size: .4rem
</style>
