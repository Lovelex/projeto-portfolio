export default {
  data: () => ({
    disabled: false
  }),
  computed: {
    itemsCounter() {
      const total = [];
      for (let i = 0; i < this.items.length; i++) {
        total.push(i + 1);
      }
      return total;
    },
  },
  methods: {
    async update(from, to) {
      await this.$store.dispatch("useUpdate/update", {
        collection: this.collection,
        id: from.id,
        item: {
          ...to,
          id: from.id
        }
      })
    },
    async changePosition(from, to) {
      this.disabled = true;
      const newFrom = this.items[from] 
      const newTo = this.items[to-1]
      await this.update(newFrom, newTo)
      await this.update(newTo, newFrom)
      location.reload()
    },
  }
}