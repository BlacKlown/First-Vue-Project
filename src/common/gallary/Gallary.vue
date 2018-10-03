<template>
  <div class="container" @click="handleClickGallary">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in bannerImgs" :key="index">
        <img :src="item">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    bannerImgs: Array
  },
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
