<template lang="pug">
div.app-layout
  left-column
  app-main
</template>

<script>
import { mapState } from 'vuex'
import LeftColumn from './LeftColumn.vue'
import AppMain from './AppMain.vue'

export default {
  components: {
    LeftColumn, AppMain
  }
}
</script>

<style lang="scss">
.app-layout {
  display: flex;
}

.app-main { flex: 1; }
</style>
