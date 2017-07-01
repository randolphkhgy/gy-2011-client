<template lang="pug">
main.app-main
  div.scroller-wrap
    div.scroller
      router-view
</template>

<script>
export default {

}
</script>


<style lang="scss">
.app-main {
  height: 100%;

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

