<template lang="html">
  <div class="register__container">
    <div class="register__wrapper">
      <InputText>
        <!-- component body is passed with slots -->
        <label for="name">Name:</label>
        <input id="name" type="text" name="name" value="" placeholder="What's your name?">
      </InputText>
      <InputText>
        <label for="email">Address:</label>
        <input id="email" type="email" name="email" value="" placeholder="Where do you live?">
      </InputText>

      <InputButton>
        <button type="button" name="button">Done</button>
      </InputButton>
    </div>
  </div>
</template>

<script>
import InputText from "../Library/InputText";
import InputButton from "../Library/InputButton";
export default {
  name: "RegisterStep2",
  components: {
    InputText,
    InputButton
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
