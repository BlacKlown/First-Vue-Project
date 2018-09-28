<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
  <home-recommend></home-recommend>
  <home-weekend></home-weekend>
</div>
</template>

<script>
import Header from './components/Header'
import Swiper from './components/Swiper'
import Icons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    'home-header': Header,
    'home-swiper': Swiper,
    'home-icons': Icons,
    'home-recommend': Recommend,
    'home-weekend': Weekend
  }
}
</script>

<style>
</style>
