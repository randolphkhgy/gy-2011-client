<template lang="pug">
section.shuzi-lotteries
  div.container
    lottery-list(:lotteries="lotteries")
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import LotteryList from '../components/LotteryList.vue'

export default {
  computed: mapState({
    lotteries: state => state.lottery.lotteries
  }),
  components: {
    LotteryList
  },
  mounted () {
    this.$store.commit('changeTitle', '时时彩(越南)');
    this.$store.dispatch('loadShuzivn');
  }
}
</script>

<style lang="scss">
.shuzi-lotteries {
  padding: 15px 0;
}
</style>
