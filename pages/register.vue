<template>
  <section class="section is-flex is-justify-content-center">
    <div class="box">
      <h3 class="is-size-4 mb-3 is-uppercase has-text-centered">Registrarse</h3>
      <UserForm :action="register" buttonText="Registrarse" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Register',
  methods: {
    async register(user) {
      try {
        await this.$axios.$post('/api/register', user)
        const res = await this.$auth.loginWith('local', { data: user })
        console.log(res)
      } catch (error) {
        console.log(error.response.data)
        this.$buefy.toast.open({
          duration: 5000,
          message: error.response.data.error.errors.email.message,
          position: 'is-bottom',
          type: 'is-danger'
        })
      }
    }
  }
}
</script>