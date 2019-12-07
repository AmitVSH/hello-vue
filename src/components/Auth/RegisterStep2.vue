<template lang="html">
  <div class="register__container">
    <div class="register__wrapper">
      <InputText>
        <!-- component body is passed with slots -->
        <label for="name">Name:</label>
        <input v-model="user.name" id="name" type="text" name="name" value="" placeholder="What's your name?">
      </InputText>
      <InputText>
        <label for="address">Address:</label>
        <input v-model="user.address" id="address" type="address" name="address" value="" placeholder="Where do you live?">
      </InputText>


      <div class="buttons__wrapper">
        <router-link to="/register">
          <InputButton>
            <button type="button" name="button">Back</button>
          </InputButton>
        </router-link>

        <router-link to="/register/complete">
          <InputButton>
            <button type="button" name="button">Done</button>
          </InputButton>
        </router-link>

      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import InputText from "../Library/InputText";
import InputButton from "../Library/InputButton";
export default {
  name: "RegisterStep2",
  components: {
    InputText,
    InputButton
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
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
