<template lang="pug">
div.app-bar.app-title
  button.close(type="button", aria-label="Close")
    span(aria-hidden="true") &times;
  h1.title {{ title }}
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss">

</style>


