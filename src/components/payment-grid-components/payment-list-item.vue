<template>
  <div @click="toggle =! toggle" class="payment-item">
    <span>{{payment.date}} - {{payment.type}} - {{payment.amount}}</span>
    <br>
    <span v-show="toggle">{{payment.bank.name}}</span>
  </div>
</template>
<script>
export default {
  name: "PaymentListItem",
  data() {
    return {
      toggle: false
    };
  },
  props: ["payment"]
};
</script>
<style>
.payment-item:hover {
  cursor: pointer;
}
</style>

