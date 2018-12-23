<template>
  <div>
    <h2>Payment List 11</h2>
    <PaymentFilter></PaymentFilter>
    <PaymentListItem></PaymentListItem>
  </div>
</template>
<script>
import PaymentFilter from "./payment-grid-components/payment-filter";
import PaymentListItem from "./payment-grid-components/payment-list-item";
export default {
  name: "PaymentList",
  components: {
    PaymentFilter,
    PaymentListItem
  }
};
</script>

