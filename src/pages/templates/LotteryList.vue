<template lang="pug">
app-main
  selection-bar.app-bar-select(slot="app-bar",v-if="selected",:title="selected.cnname")
  section.content
    div.container
      div.lottery-list
        ul.list-group
          li.list-group-item.lottery-item(v-for="lottery in lotteries",:class="{active: lottery === selected}")
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
import AppMain from '../../components/AppMain.vue'
import SelectionBar from '../../components/SelectionBar.vue'

export default {
  data() {
    return {
      selected: null
    }
  },
  computed: mapState({
    lotteries: state => state.lottery.lotteries,
  }),
  components: {
    AppMain,
    SelectionBar
  },
  methods: {
    select(lottery, e) {
      e.preventDefault();
      if (this.selected === lottery) {
        this.selected = null;
      } else {
        this.selected = lottery;
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/variables.scss';

.content {
  padding: 15px 0;
}

.lottery-list {

  .lottery-item {
    display: flex;

    &.active {
      background-color: $lottery-list-bg;
    }

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
        color: inherit;
        text-decoration: none;

        &:hover, &:focus {
          color: inherit;
          text-decoration: none;
        }
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
        color: inherit;
      }
    }
  }
}
</style>

