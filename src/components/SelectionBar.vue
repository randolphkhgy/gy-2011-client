<template lang="pug">
div.selection-bar
  h1.app-bar-title {{ title }}
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

</style>
