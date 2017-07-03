<template lang="pug">
div.app-bar(:class="this.class")
  slot
    h1.app-bar-title {{ title }}
    button.close(type="button", aria-label="Close")
      span(aria-hidden="true") &times;
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    class: {
      default: 'app-bar-default'
    }
  },
  computed: mapState(['title'])
}
</script>

<style lang="scss">

</style>

