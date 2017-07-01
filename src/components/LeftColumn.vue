<template lang="pug">
div.left-column
  div.scroller-wrap
    div.scroller
      div.scroller-inner
        app-nav
</template>

<script>
import AppNav from './AppNav.vue'

export default {
  components: {
    AppNav
  }
}
</script>


<style lang="scss">
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

.left-column {
  flex-shrink: 0;
  background: $left-column-bg;
  width: $left-column-width;
  color: #fff;
  height: 100%;

  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;

  @include hide-scrollbar-y($left-column-width);

  .scroller-inner { padding: 0 15px; }

  a {
    color: $left-column-link-color;
    
    :hover, :focus {
      color: $left-column-link-hover-color;
    }
  }
}
</style>
