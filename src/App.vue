<template>
  <div>
    <h1>Payments Activities</h1>
    <PaymentInfo></PaymentInfo>
    <PaymentList></PaymentList>
  </div>
</template>

<script>
import PaymentInfo from "./components/payment-info";
import PaymentList from "./components/payment-list";

export default {
  name: "app",
  components: {
    PaymentInfo,
    PaymentList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
