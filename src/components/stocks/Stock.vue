<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">{{stock.stockName}}
          <small>(Price: {{ stock.currentUnitValue }})</small>
          | Value: {{ wasting }}
        </h3> 
      </div> 
      <div class="panel-body">
        <div class="pull-left">
          <input 
            v-model="qtyToBuy" 
            class="form-control" 
            :class="{danger: insuficientFunds}"
            type="number"
            placeholder="Qty">
        </div>
        <div class="pull-right">
            <button class="btn btn-success" 
              @click="buyStock"
              :disabled="insuficientFunds || qtyToBuy <= 0"
              >{{ btnMessage }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.danger{
  border: 1px solid red
}
</style>


<script>

export default {
  props: {
    stock: {
      type: Object,
      required: true
    }
  },
    data(){
      return {
        qtyToBuy: 0
      }
    },
    computed:{
      funds(){
        return this.$store.getters.funds
      },
      insuficientFunds() {
        return this.qtyToBuy * this.stock.currentUnitValue > this.funds
      },
      wasting(){
        return this.qtyToBuy * this.stock.currentUnitValue
      },
      btnMessage(){
        return this.insuficientFunds ? 'No funds' : 'Buy'
      }
    },
    methods:{
      buyStock(){
        const order = {
          stockId: this.stock.id,
          quantity: this.qtyToBuy,
          stockPrice: this.stock.currentUnitValue
        }
        this.$store.dispatch('buyStock', order);
        this.qtyToBuy = 0;
      }
    }
}
</script>
