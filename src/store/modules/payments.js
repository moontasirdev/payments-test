import paymentApi from './../../services/payment-data-service';

const state = {
    payments: []
};
const getters = {
    allPayments: state => state.payments,
};
const actions = {
    async fetchPayments({
        commit
    }) {
        const response = await paymentApi.getPayments();
        console.log('calling api');
        console.log(response)

        commit('setPayments', response);
    }
};
const mutations = {
    setPayments: (state, payments) => {
        state.payments = payments;
    },
    setFilter: (state, payload) => {
        state.filter = payload;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
