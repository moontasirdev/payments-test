<template>
  <div>
    <h2>Payment List</h2>
    <PaymentFilter></PaymentFilter>
    <PaymentListItem v-for="payment in allPayments" :payment="payment" :key="payment.id"></PaymentListItem>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import PaymentFilter from "./payment-grid-components/payment-filter";
import PaymentListItem from "./payment-grid-components/payment-list-item";
export default {
  name: "PaymentList",
  methods: mapActions(["fetchPayments"]),
  computed: mapGetters(["allPayments"]),
  components: {
    PaymentFilter,
    PaymentListItem
  },
  created() {
    this.fetchPayments();
  }
};
</script>

