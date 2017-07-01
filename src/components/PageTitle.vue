<script>
export default {
  props: ['title'],
  created() {
    document.title = this.title;
  },
  watch: {
    title (title) {
      document.title = this.title;
    }
  },
  render() {
    // nothing
  }
}
</script>
