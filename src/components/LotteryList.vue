<template lang="pug">
div.lottery-list
  ul.list-group
    li.list-group-item.lottery-item(v-for="lottery in lotteries")
      .lottery-title
        a(@click="select(lottery, $event)", href="#") {{ lottery.cnname }}
      .actions
        .dropdown.pull-right
          a.dropdown-toggle(href="#",data-toggle="dropdown",aria-haspopup="true",aria-expanded="false")
            span.glyphicon.glyphicon-option-vertical(aria-hidden="true")
          ul.dropdown-menu
            li
              a(href="#") 抓号
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['lotteries'],

  computed: mapState({
    selectedItems: state => state.lottery.selected
  }),

  methods: {
    select(lottery, e) {
      e.preventDefault();
      if (this.selectedItems.length) {
        this.$store.commit("setSelectedLotteries", []);
      } else {
        this.$store.commit("setSelectedLotteries", [lottery]);
      }
    }
  }
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

      a {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: -10px -15px;
        padding: 10px 15px;
      }
    }

    .lottery-title + .actions {
      padding-left: 30px;
    }

    .actions {
      display: block;

      > .dropdown > a {
        display: block;
        margin: -10px -15px;
        padding: 10px 15px;
        color: #333;
      }
    }
  }
}
</style>

