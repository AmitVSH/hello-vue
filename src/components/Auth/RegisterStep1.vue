<template lang="html">
  <div class="register__container">
    <div class="register__wrapper">
      <InputText>
        <!-- component body is passed with slots -->
        <label for="mobile">Mobile No:</label>
        <input id="mobile" type="text" name="mobile" value="" placeholder="Your best contact number?">
      </InputText>
      <InputText>
        <label for="email">Email:</label>
        <input id="email" type="email" name="email" value="" placeholder="Where can we send mail to you?">
      </InputText>


      <div class="buttons__wrapper">
        <router-link to="/">
          <InputButton>
            <button type="button" name="button">Home</button>
          </InputButton>
        </router-link>

        <router-link to="/register/step2">
          <InputButton>
            <button type="button" name="button">Next</button>
          </InputButton>
        </router-link>
      </div>


    </div>
  </div>
</template>

<script>
import InputText from "../Library/InputText";
import InputButton from "../Library/InputButton";
export default {
  name: "RegisterStep1",
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
  .buttons__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>
