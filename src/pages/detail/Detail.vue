<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="List"></detail-list>
    </div>
    <div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>
  </div>
</template>

<script>
import Banner from './components/Banner'
import Header from './components/Header'
import List from './components/List'

export default {
  name: 'Detail',
  components: {
    'detail-banner': Banner,
    'detail-header': Header,
    'detail-list': List
  },
  data () {
    return {
      List: [{
        title: '成人票',
        children: [{
          title: '[日场]门票（预定）',
          children: [{
            title: '世界公园门票（文惠券产品）'
          }, {
            title: '世界公园成人票(提前订优惠)'
          }]
        }, {
          title: '[日场]门票(当天)'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特价票'
      }]
    }
  }
}
</script>

<style>
</style>
