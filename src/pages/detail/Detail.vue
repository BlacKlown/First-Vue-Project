<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
  </div>
</template>

<script>
import Banner from './components/Banner'
import Header from './components/Header'

export default {
  name: 'Detail',
  components: {
    'detail-banner': Banner,
    'detail-header': Header
  }
}
</script>

<style>
</style>
