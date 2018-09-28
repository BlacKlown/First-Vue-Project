<template>
<div>
  <div class="title">热销推荐</div>
  <ul>
    <li class="item border-bottom" v-for="item in list" :key="item.id">
      <img :src="item.imgUrl" class="item-img">
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-btn">查看详情</button>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      list: [{
        id: '01',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/2f/e615bc3c8e0cf46d9fb92c58ac305f45.water.jpg_200x200_e4e69a48.jpg',
        title: '世界公园',
        desc: '40个国家的109处著名古迹名胜微缩景点'
      }, {
        id: '02',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_200x200_c62292e9.jpg',
        title: '北京动物园',
        desc: '百余种动物，让你离自然更近'
      }, {
        id: '03',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/c2/c212a154649088c1.water.jpg_200x200_69d1df69.jpg',
        title: '水立方嬉水乐园',
        desc: '魔幻水上世界，北京城永恒经典'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~css/mixins.styl'
  .title
    margin-top: .2rem
    background-color: #eee
    line-height: .8rem
    text-indent: .2rem
  .item
    height: 2rem
    display: flex
    .item-img
      height: 1.8rem
      width: 1.8rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-btn
        background-color: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        margin-top: .22rem
        color: #fff
        line-height: .44rem
</style>
