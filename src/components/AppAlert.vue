<template lang="pug">
div.app-alert(:class="['class']", v-if="active")
  button.close(type="button", @click="hide")
    span(aria-hidden="true") &times;
  | {{ message }}
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: mapState({
    active: state => state.appAlert.active,
    class: state => state.appAlert.class,
    message: state => state.appAlert.message,
  }),
  methods: {
    ...mapMutations({
      show: 'alertShow',
      hide: 'alertHide',
      toggle: 'alertToggle'
    }),
    ...mapActions({
      alert: 'alert'
    })
  }
}
</script>


<style lang="scss">
.app-alert {
  flex-shrink: 0;
  background: #f2dede;
  padding: 15px;
  border-bottom: 1px solid transparent;

  > p, > ul {
    margin: 0;
  }
}
</style>
