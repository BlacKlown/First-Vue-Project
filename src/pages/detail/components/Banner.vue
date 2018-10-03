<template>
  <div>
    <div class="banner-wrapper" @click="handleBannerClick">
      <img :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{bannerTitle}}</div>
        <div class="banner-number">
          <i class="iconfont icon-pic"></i>
          {{bannerImgs.length}}
        </div>
      </div>
    </div>
    <gallary
      v-if="show"
      @gallaryClick="handleBannerClick"
      :bannerImgs="bannerImgs"
    ></gallary>
  </div>
</template>

<script>
import Gallary from '@/common/gallary/Gallary'
export default {
  name: 'Banner',
  props: {
    bannerImg: String,
    bannerTitle: String,
    bannerImgs: Array
  },
  data () {
    return {
      show: false
    }
  },
  components: {
    'gallary': Gallary
  },
  methods: {
    handleBannerClick () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner-wrapper
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    background-color: #ccc
    img
      width: 100%
    .banner-info
      position: absolute
      bottom: 0
      width: 100%
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, transparent 0, #000 100%)
      .banner-title
        float: left
        padding: 0 .2rem
        font-size: .32rem
      .banner-number
        float: right
        height: .32rem
        padding: 0 .3rem
        margin: .14rem .2rem
        background-color: rgba(0, 0, 0, .5)
        border-radius: .2rem
        line-height: .32rem
        font-size: .24rem
        .iconfont
          font-size: .24rem
</style>
