<template lang="pug">
div.app-nav
  ul
    li
      a(href="#") 时时彩(中国)
    li
      a(href="#") 时时彩(越南)
</template>

<script>
export default {

}
</script>

<style lang="scss">
.app-nav {
  > ul {
    list-style-type: none;
    margin: 0 -15px;
    padding: 0;

    > li {
      line-height: 20px;

      > a {
        display: block;
        padding: 10px 15px;
        color: #9d9d9d;
        text-decoration: none;

        &:hover, &:focus {
          color: #fff;
          text-decoration: none;
          background: #3b3d40;
        }
      }
    }
  }
}
</style>


