<template>
  <div class="card">
    <h1 class="card__title">{{label}}</h1>

    <div class="card__body">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",

  props: {
    label: String
  }
}
</script>

<style scoped>
.card {
  margin-bottom: 25px;
}

.card__title {
  font-family: Tahoma, Verdana, Arial, sans-serif;
  font-weight: 400;
  font-size: 17px;
  padding: 0 13px;
}

.card__body {
  padding: 23px 13px 13px 13px;
  border: 1px solid #e5e5e5;
  font-size: 13px;
}
</style>
