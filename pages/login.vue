<template>
  <section class="section is-flex is-justify-content-center">
    <div class="box">
      <h3 class="is-size-4 mb-3 is-uppercase has-text-centered">Log in</h3>
      <UserForm :action="login" buttonText="Log in" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    async login(user) {
      try {
        const res = await this.$auth.loginWith('local', { data: user })
        console.log(res)
        // this.$router.push('/profile')
      } catch (error) {
        console.log(error.response.data)
        this.$buefy.toast.open({
          duration: 5000,
          message: error.response.data.message,
          position: 'is-bottom',
          type: 'is-danger'
        })
      }
    }
  }
}
</script>