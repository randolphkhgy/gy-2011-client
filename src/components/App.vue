<template lang="jade">
div
  div {{ message }}
  ul
    li(v-for="lottery in lotteries")
      {{ lottery.cnname }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState([
    'lotteries', 'message'
  ])
}
</script>

<style lang="scss">
#app {
  background: #ccc;
}
</style>
