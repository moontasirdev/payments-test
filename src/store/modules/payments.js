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
        const tmp = [{
            "id": "sdfs2w323",
            "date": "01/01/2018",
            "type": "ACH",
            "user-type": "primary",
            "amount": "120.01",
            "bank": {
                "name": "BOA",
                "accountNumber": "12123"
            }
        }, {
            "id": "sfsd2w323",
            "date": "02/02/2018",
            "type": "ACH",
            "user-type": "primary",
            "amount": "200.21",
            "bank": {
                "name": "Chase",
                "accountNumber": "112233"
            }
        }];
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