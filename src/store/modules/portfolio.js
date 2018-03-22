const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
        const operationPrice = stockPrice * quantity;
        if(operationPrice > state.funds) return;
        
        const record = state.stocks.find(el => el.id == stockId);
        if(record) {
            record.quantity += quantity
        } else {
            state.stocks.push({
                id: stockId,
                quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(el => el.id == stockId);
        if(record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += operationPrice
    }
}

const actions = {
    sellStock: ({commit}, order) => {
        commit('SELL_STOCK', order);
    }
}

const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map(el => {
            const record = getters.stocks.find(elem => elem.id == el.id)
            return {
                id: el.id,
                quantity: el.quantity,
                price: record.currentUnitValue,
                name: record.stockName
            }
        });
    },
    funds(state){
        return state.funds;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}