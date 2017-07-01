<template lang="pug">
main.app-main
  app-title
  .app-content
    .scroller-wrap
      .scroller
        router-view
</template>

<script>
import AppTitle from './AppTitle.vue'

export default {
  components: {
    AppTitle
  }
}
</script>


<style lang="scss">
.app-main {
  display: flex;
  overflow: hidden;
  height: 100%;
  flex-direction: column;

  .app-content {
    flex: 1;
    overflow: hidden;
  }

  .scroller-wrap {
    height: 100%;
  }

  .scroller {
    height: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 14px;
    }

    &::-webkit-scrollbar-thumb, &::-webkit-scrollbar-track-piece {
        background-color: #7289da;
        background-clip: padding-box;
        border: 3px solid #fff;
        border-radius: 7px;
    }

    &::-webkit-scrollbar-track-piece {
        background-color: #f3f3f3;
    }
  }
}
</style>

