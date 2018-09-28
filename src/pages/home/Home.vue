<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
</div>
</template>

<script>
import Header from './components/Header'
import Swiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    'home-header': Header,
    'home-swiper': Swiper
  }
}
</script>

<style>
</style>
