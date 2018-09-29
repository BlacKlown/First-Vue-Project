<template>
<div class="list">
  <div class="area">
    <div class="title border-topbottom">当前城市</div>
    <div class="btn-list">
      <div class="btn-wapper">
        <div class="btn">北京</div>
      </div>
    </div>
  </div>
  <div class="area">
    <div class="title border-topbottom">热门城市</div>
    <div class="btn-list">
      <div class="btn-wapper">
        <div class="btn">北京</div>
      </div>
      <div class="btn-wapper">
        <div class="btn">北京</div>
      </div>
      <div class="btn-wapper">
        <div class="btn">北京</div>
      </div>
      <div class="btn-wapper">
        <div class="btn">北京</div>
      </div>
      <div class="btn-wapper">
        <div class="btn">北京</div>
      </div>
      <div class="btn-wapper">
        <div class="btn">北京</div>
      </div>
      <div class="btn-wapper">
        <div class="btn">北京</div>
      </div>
      <div class="btn-wapper">
        <div class="btn">北京</div>
      </div>
    </div>
  </div>
  <div class="area">
    <div class="title border-topbottom">A</div>
    <ul class="item-list">
      <li class="item border-bottom">北京</li>
      <li class="item border-bottom">北京</li>
      <li class="item border-bottom">北京</li>
      <li class="item border-bottom">北京</li>
      <li class="item border-bottom">北京</li>
    </ul>
  </div>
  <div class="area">
    <div class="title border-topbottom">A</div>
    <ul class="item-list">
      <li class="item border-bottom">北京</li>
      <li class="item border-bottom">北京</li>
      <li class="item border-bottom">北京</li>
      <li class="item border-bottom">北京</li>
      <li class="item border-bottom">北京</li>
    </ul>
  </div>
  <div class="area">
    <div class="title border-topbottom">A</div>
    <ul class="item-list">
      <li class="item border-bottom">北京</li>
      <li class="item border-bottom">北京</li>
      <li class="item border-bottom">北京</li>
      <li class="item border-bottom">北京</li>
      <li class="item border-bottom">北京</li>
    </ul>
  </div>

</div>
</template>

<script>
export default {
  name: 'CityList'
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
      .btn-wapper
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
