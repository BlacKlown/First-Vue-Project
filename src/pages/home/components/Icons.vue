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
  data () {
    return {
      iconList: [{
        id: '01',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        imgDesc: '景点门票'
      }, {
        id: '02',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        imgDesc: '北京必游'
      }, {
        id: '03',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        imgDesc: '一日游'
      }, {
        id: '04',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        imgDesc: '文化古迹'
      }, {
        id: '05',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        imgDesc: '动植物园'
      }, {
        id: '06',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        imgDesc: '故宫'
      }, {
        id: '07',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
        imgDesc: '野生动物园'
      }, {
        id: '08',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        imgDesc: '泡温泉'
      }, {
        id: '09',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
        imgDesc: '游乐场'
      }, {
        id: '10',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
        imgDesc: '全部玩乐'
      }],
      swiperOption: {

      }
    }
  },
  computed: {
    pages () {
      var pages = []
      this.iconList.forEach(function (item, index) {
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
          padding: .1rem
          height: 90%
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
