<template>
  <form>
    <b-field label="Email">
      <b-input placeholder="Email" v-model="user.email"></b-input>
    </b-field>
    <b-field label="Contraseña">
      <b-input type="password" password-reveal placeholder="Password" v-model="user.password"></b-input>
    </b-field>
    <b-button expanded @click="action(user)" type="is-primary">{{ buttonText }}</b-button>
  </form>
</template>

<script>
export default {
  name: "UserForm",
  props: ["action", "buttonText"],
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
};
</script>
