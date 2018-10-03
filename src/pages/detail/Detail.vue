<template>
  <div>
    <detail-banner
      :bannerImg="bannerImg"
      :bannerTitle="bannerTitle"
      :bannerImgs="bannerImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="List"></detail-list>
    </div>
    <div>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner'
import Header from './components/Header'
import List from './components/List'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    'detail-banner': Banner,
    'detail-header': Header,
    'detail-list': List
  },
  data () {
    return {
      bannerImg: '',
      bannerTitle: '',
      bannerImgs: [],
      List: []
    }
  },
  methods: {
    getDatailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDatailInfoSucc)
    },
    getDatailInfoSucc (res) {
      if (res.data.ret && res.data.data) {
        var data = res.data.data
        this.bannerImg = data.bannerImg
        this.bannerTitle = data.bannerTitle
        this.bannerImgs = data.bannerImgs
        this.List = data.detailList
      }
    }
  },
  mounted () {
    this.getDatailInfo()
  }
}
</script>

<style>
</style>
