<template lang="pug">
div.left-column
  span test
  a(href="#") link
</template>

<script>
export default {

}
</script>


<style lang="scss">
@import "../styles/variables.scss";

.left-column {
  flex-shrink: 0;
  background: $left-column-bg;
  width: 240px;
  color: #fff;

  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;

  a {
    color: $left-column-link-color;
    
    :hover, :focus {
      color: $left-column-link-hover-color;
    }
  }
}
</style>
