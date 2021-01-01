<template>
  <section class="section">
    <div class="content">
      <h3>Perfil del usuario</h3>
      <p>Esta página solo es visible por un usuario logueado.</p>
      <p>Estás conectado como: <strong>{{ $auth.user.email }}</strong></p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Profile',
  middleware: 'auth',
}
</script>