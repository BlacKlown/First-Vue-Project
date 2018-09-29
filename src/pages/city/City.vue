<template>
<div>
  <city-header></city-header>
  <city-search></city-search>
  <city-list></city-list>
</div>
</template>

<script>
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'

export default {
  name: 'City',
  components: {
    'city-header': Header,
    'city-search': Search,
    'city-list': List
  }
}
</script>

<style></style>
