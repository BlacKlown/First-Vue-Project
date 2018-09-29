<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'

export default {
  name: 'City',
  components: {
    'city-header': Header,
    'city-search': Search,
    'city-list': List,
    'city-alphabet': Alphabet
  }
}
</script>

<style></style>
