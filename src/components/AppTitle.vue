<template lang="pug">
div.app-title
  button.close(type="button", aria-label="Close")
    span(aria-hidden="true") &times;
  h1.title {{ title }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['title'])
}
</script>

<style lang="scss">
@import '../styles/variables.scss';

.app-title {
  flex-shrink: 0;
  height: 50px;
  padding: 0 15px;
  box-shadow: 0 2px 5px rgba(0,0,0,.26);
  z-index: $zindex-app-title;

  .title {
    line-height: 20px;
    margin: 0 0 0 -15px;
    padding: 15px;
    font-size: 18px;
    font-weight: 500;
  }

  .close {
    padding: 15px;
    margin-right: -15px;
    line-height: 20px;
  }
}
</style>

