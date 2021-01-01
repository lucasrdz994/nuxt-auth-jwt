<template>
  <div>
    <b-navbar class="has-background-light">
      <template slot="brand">
        <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
          <img
            src="~/static/logo.png"
            alt="Autenticación con Nuxt Auth"
          />
        </b-navbar-item>
      </template>

      <template slot="start">
        <b-navbar-item tag="nuxt-link" to="/profile">Perfil del usuario</b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons" v-if="!me">
            <b-button tag="nuxt-link" to="/register" class="button is-primary">
              <strong>Registrarse</strong>
            </b-button>
            <b-button tag="nuxt-link" to="/login" class="button is-primary is-light">Log in</b-button>
          </div>
          <b-button v-else @click="$auth.logout()">Log out</b-button>
        </b-navbar-item>
      </template>
    </b-navbar>

    <section class="main-content columns">
      <div class="container column is-fluid">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    me() {
      return this.$store.state.auth.user
    }
  }
}
</script>

<style>
.box {
  width: 320px;
}
</style>
