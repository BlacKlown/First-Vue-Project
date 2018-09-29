<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.imgDesc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      var pages = []
      this.list.forEach(function (item, index) {
        var page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~css/mixins.styl'
  .icons
    height: 0
    padding-bottom: 50%
    overflow: hidden
    .icon
      float: left
      position: relative
      width: 25%
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        img
          display: block
          margin: 0 auto
          padding-top: .2rem
          height: 80%
      .icon-desc
        position: absolute
        bottom: 0
        width: 100%
        height: .44rem
        line-height: .44rem
        text-align: center
        color: #333
        ellipsis()
</style>
