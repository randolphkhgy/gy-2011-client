<template lang="pug">
div.app
  app-alert
  app-layout
</template>

<script>
import AppAlert from './AppAlert.vue'
import AppLayout from './AppLayout.vue'

export default {
  components: {
    AppAlert, AppLayout
  }
}
</script>

<style lang="scss">
.app {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
}

.app-layout { flex: 1; }
</style>
