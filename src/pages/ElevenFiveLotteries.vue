<script>
import LotteryList from './templates/LotteryList.vue'

export default {
  render: h => h(LotteryList),
  mounted () {
    this.$store.commit('changeTitle', '11选5');
    this.$store.dispatch('loadElevenFive');
  }
}
</script>
