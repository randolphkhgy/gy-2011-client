<template lang="pug">
div.lottery-list
  ul.list-group
    li.list-group-item.lottery-item(v-for="lottery in lotteries")
      .lottery-title {{ lottery.cnname }}
      .actions
        span.glyphicon.glyphicon-option-vertical(aria-hidden="true")
</template>

<script>
export default {
  props: ['lotteries'],
}
</script>

<style lang="scss">
.lottery-list {

  .lottery-item {
    display: flex;

    .lottery-title {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>

