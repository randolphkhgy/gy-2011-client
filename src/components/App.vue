<template lang="pug">
div.app
  page-title(:title="title")
  app-alert
  app-layout
  network-loading
</template>

<script>
import { mapState } from 'vuex'
import PageTitle from './PageTitle.vue'
import AppAlert from './AppAlert.vue'
import AppLayout from './AppLayout.vue'
import NetworkLoading from './NetworkLoading.vue'

export default {
  computed: mapState(['title']),
  components: {
    PageTitle,
    AppAlert,
    AppLayout,
    NetworkLoading
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
</style>
