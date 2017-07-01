<template lang="pug">
main.app-main
  div.scroller-wrap
    div.scroller
      div {{ message }}
        ul
          li(v-for="lottery in lotteries") {{ lottery.cnname }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    lotteries: state => state.lottery.lotteries,
    message: 'message'
  })
}
</script>


<style lang="scss">
.app-main {
  height: 100%;

  .scroller-wrap {
    height: 100%;
  }

  .scroller {
    height: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 14px;
    }

    &::-webkit-scrollbar-thumb, &::-webkit-scrollbar-track-piece {
        background-color: #7289da;
        background-clip: padding-box;
        border: 3px solid #fff;
        border-radius: 7px;
    }

    &::-webkit-scrollbar-track-piece {
        background-color: #f3f3f3;
    }
  }
}
</style>

