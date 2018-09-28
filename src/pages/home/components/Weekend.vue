<template>
<div>
  <div class="title">周末去哪儿</div>
  <ul>
    <li class="item border-bottom" v-for="item in list" :key="item.id">
      <div class="img-wapper">
        <img :src="item.imgUrl" class="item-img">
      </div>
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      list: [{
        id: '01',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
        title: '漂流勇进，烧烤露营',
        desc: '轻松水上漂，任我乐逍遥'
      }, {
        id: '02',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
        title: '北京清凉避暑胜地',
        desc: '到大自然中享受“天然空调”的清凉'
      }, {
        id: '03',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        title: '北京必游TOP10',
        desc: '来北京必去的景点非这些地方莫属'
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
    .img-wapper
      overflow: hidden
      height: 0
      padding-bottom: 33.43%
      .item-img
        width: 100%
    .item-info
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        margin-bottom: .1rem
        ellipsis()
</style>
