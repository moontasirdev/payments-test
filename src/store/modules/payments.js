const state = {
    payments: []
};
const getters = {
    allPayments: state => state.payments
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
                "name": "BOA"
            }
        }];
        commit('setPayments', tmp);
    }
};
const mutations = {
    setPayments: (state, payments) => {
        state.payments = payments;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}