<template>
  <div class="container" @click="handleClickGallary">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <img src="http://img1.qunarzz.com/sight/p0/1508/2f/e615bc3c8e0cf46d9fb92c58ac305f45.water.jpg_r_800x800_a1efaeb7.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="http://img1.qunarzz.com/wugc/p39/201307/07/02e9dc4abd04020893835fbb.jpg_r_800x800_e75596e6.jpg">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    }
  },
  methods: {
    handleClickGallary () {
      this.$emit('gallaryClick')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    z-index: 99
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    display: flex
    flex-direction: column
    justify-content: center
    background-color: #000
    .swiper
      width: 100%
      img
        width: 100%
      .swiper-pagination
        color: #fff
</style>
