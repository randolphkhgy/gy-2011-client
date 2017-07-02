<template lang="pug">
div.app-layout
  left-column
  router-view
</template>

<script>
import { mapState } from 'vuex'
import LeftColumn from './LeftColumn.vue'

export default {
  components: {
    LeftColumn
  }
}
</script>

<style lang="scss">
.app-layout {
  display: flex;
  flex: 1;
}

.app-main { flex: 1; }
</style>
