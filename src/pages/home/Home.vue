<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
  <home-recommend></home-recommend>
</div>
</template>

<script>
import Header from './components/Header'
import Swiper from './components/Swiper'
import Icons from './components/Icons'
import Recommend from './components/Recommend'
export default {
  name: 'Home',
  components: {
    'home-header': Header,
    'home-swiper': Swiper,
    'home-icons': Icons,
    'home-recommend': Recommend
  }
}
</script>

<style>
</style>
