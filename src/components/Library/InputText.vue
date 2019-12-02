<template lang="html">
  <div class="input__wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .input__wrapper {
    padding: 10px 10px;
  }
  label {
    float: left;
  }
  input {
    width: 100%;
    padding: 5px 5px;
    margin: 0px 0;
    box-sizing: border-box;
    border: 3px solid #ccc;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
    font-family: "Prompt", sans-serif;
  }
  input:focus {
    border: 3px solid #555;
  }
</style>
