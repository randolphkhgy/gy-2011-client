<template lang="pug">
main.app-main
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

</style>

