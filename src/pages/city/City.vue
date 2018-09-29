<template>
<div>
  <city-header></city-header>
  <city-search></city-search>
</div>
</template>

<script>
import Header from './components/Header'
import Search from './components/Search'

export default {
  name: 'City',
  components: {
    'city-header': Header,
    'city-search': Search
  }
}
</script>

<style></style>
