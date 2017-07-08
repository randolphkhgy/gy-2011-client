<template lang="pug">
div.selection-bar
  h1.app-bar-title {{ title }}
  slot
</template>

<script>
export default {
  props: ['title'],
  mounted() {

    setImmediate(() => {
      $('.app-bar').removeClass('app-bar-init')
    });
  }
}
</script>

<style lang="scss">
.selection-bar {
  flex: 1;
  display: flex;
}
</style>
