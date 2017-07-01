<template lang="pug">
nav.app-nav
  ul
    li
      router-link(:to="{path: '/shuzi'}") 时时彩(中国)
    li
      router-link(:to="{path: '/shuzivn'}") 时时彩(越南)
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

        &.router-link-active {
          color: #fff;
          text-decoration: none;
          background: #292b2f;
        }
      }
    }
  }
}
</style>


