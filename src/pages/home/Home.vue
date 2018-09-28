<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
</div>
</template>

<script>
import Header from './components/Header'
import Swiper from './components/Swiper'
import Icons from './components/Icons'
export default {
  name: 'Home',
  components: {
    'home-header': Header,
    'home-swiper': Swiper,
    'home-icons': Icons
  }
}
</script>

<style>
</style>
