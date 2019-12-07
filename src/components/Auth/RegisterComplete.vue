<template lang="html">
  <div class="">
    <img class="thank_you_image" alt="Thank you!" src="../../assets/badge.svg">
    <h3>Thank you {{user.name}} for your registration!</h3>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "RegisterComplete",
  computed: {
    ...mapState({
      user: state => state.user
    })
  }
}
</script>

<style lang="css" scoped>
.thank_you_image {
  width: 250px;
  height: auto;
  padding: 10px;  
}
</style>
