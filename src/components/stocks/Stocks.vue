<template>
  <div>
      <h1>Stocks</h1>
      <hr>
      <app-stock
        v-for="s in getAvailibleStocks"
        :stock="s"
      ></app-stock>
  </div>
</template>
<script>
import Stock from './Stock.vue'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
        getAvailibleStocks: 'stocks'
      })
  },
  components:{
    appStock: Stock
  }
}
</script>
