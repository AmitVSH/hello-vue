<template lang="html">
  <div class="register__container">
    <div class="register__wrapper">
      <InputText>
        <!-- component body is passed with slots -->
        <label for="mobile">Mobile No:</label>
        <input id="mobile" type="text" name="mobile" value="" placeholder="Enter mobile number">
      </InputText>
      <InputText>
        <label for="email">Email:</label>
        <input id="email" type="email" name="email" value="" placeholder="Enter email">
      </InputText>
    </div>
  </div>
</template>

<script>
import InputText from "../Library/InputText";
export default {
  name: "RegisterStep1",
  components: {
    InputText
  }
}
</script>

<style lang="css" scoped>
  .register__container {
    display: grid;
    align-items: center;
    justify-items: center;
  }
  .register__wrapper  {
    padding: 21px 0px;
  }
</style>
