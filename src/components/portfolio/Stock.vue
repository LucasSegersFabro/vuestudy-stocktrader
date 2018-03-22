<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">{{ stock.name }}
          <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
        </h3> 
      </div> 
      <div class="panel-body">
        <div class="pull-left">
          <input v-model="quantity" class="form-control" type="number" placeholder="Qty">
        </div>
        <div class="pull-right">
            <button class="btn btn-success" 
              @click="sellStock"
              :disabled="quantity <= 0"
              >Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: {
    stock: {
      type: Object,
      required: true
    }
  },
    data(){
      return {
        quantity: 0
      }
    },
    computed:{

    },
    methods:{
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      sellStock(){
        const order = {
          stockId: this.stock.id,
          quantity: this.quantity,
          stockPrice: this.stock.currentUnitValue
        }
        this.placeSellOrder(order);
        this.quantity = 0;
      }
    },
    created(){
      console.log(this.stock);
    }
}
</script>
