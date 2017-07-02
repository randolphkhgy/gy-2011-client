<script>
import LotteryList from './templates/LotteryList.vue'

export default {
  render: h => h(LotteryList),
  mounted () {
    this.$store.commit('changeTitle', '时时彩(中国)');
    this.$store.dispatch('loadShuzi');
  }
}
</script>
