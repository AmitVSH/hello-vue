<template lang="html">
  <div class="button__wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
button {
  background-color: #326842;
  padding: 5px 20px;
  border-radius: 5px;
  margin: 10px;
  text-decoration: none;
  border: 1px solid #ccc;
  color: #fff;
  font-family: "Prompt", sans-serif;
  cursor: pointer;
}
</style>
