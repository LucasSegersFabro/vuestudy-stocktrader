<template>
  <div>
       <h1>Stocks</h1>
      <hr>
      <app-stock
        v-for="s in stocks"
        :stock="s"
      ></app-stock>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Stock from './Stock.vue'

export default {
  computed:{
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
    
  },
  components: {
      appStock: Stock
  }
}
</script>
