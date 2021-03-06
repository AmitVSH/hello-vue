import { mapState } from "vuex";
export const main = {
  computed: {
    ...mapState({
      user: state => state.user
    }),
    registrationProgress: function() {
      let progress = 0;
      if(this.user.email.length > 0) progress += 25;
      if(this.user.mobile.length > 0) progress += 25;
      if(this.user.name.length > 0) progress += 25;
      if(this.user.address.length > 0) progress += 25;

      return progress+"% completed...";
    }
  }
}
