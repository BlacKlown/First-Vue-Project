<template>
  <ul class="item-list">
    <li
      class="item" v-for="item in letters"
      :key="item"
      :ref="item"
      @click="handleClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      timer: null,
      defaultY: 0
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.changedTouches[0].clientY - 80
          const index = Math.floor((touchY - this.defaultY) / 20)
          if (index >= 0 && index <= this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  updated () {
    this.defaultY = this.$refs['A'][0].offsetTop
  }
}
</script>

<style lang="stylus" scoped>
  @import '~css/reset.styl'
  .item-list
    position: absolute
    top: 1.6rem
    right: 0
    bottom: 0
    width: .4rem
    display: flex
    flex-direction: column
    justify-content: center
    .item
      line-height: .4rem
      color: $headerColor
      text-align: center
</style>
