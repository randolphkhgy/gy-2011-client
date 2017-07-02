<template lang="pug">
app-main
  selection-bar.app-bar-select(slot="app-bar",v-if="selectedItem",:title="selectedItem.cnname")
  section.shuzi-lotteries
    div.container
      lottery-list(:lotteries="lotteries")
</template>

<script>
import { mapState } from 'vuex'
import AppMain from '../components/AppMain.vue'
import LotteryList from '../components/LotteryList.vue'
import SelectionBar from '../components/SelectionBar.vue'

export default {
  computed: mapState({
    lotteries: state => state.lottery.lotteries,
    selectedItem: state => {
      var selectedItems = state.lottery.selected;
      if (selectedItems.length) {
        return selectedItems[0];
      }
      return null;
    }
  }),
  components: {
    AppMain,
    LotteryList,
    SelectionBar
  },
  mounted () {
    this.$store.commit('changeTitle', '时时彩(中国)');
    this.$store.dispatch('loadShuzi');
  }
}
</script>

<style lang="scss">
.shuzi-lotteries {
  padding: 15px 0;
}
</style>
