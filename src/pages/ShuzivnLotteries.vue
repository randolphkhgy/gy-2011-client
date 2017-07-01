<template lang="pug">
div.shuzi-lotteries
  div
    ul
      li(v-for="lottery in lotteries") {{ lottery.cnname }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    lotteries: state => state.lottery.lotteries
  }),
  mounted () {
    this.$store.dispatch('loadShuzivn');
  }
}
</script>

<style lang="scss">

</style>
