<template>
  <div class="card">
    <h2>Забыл пароль? Так вспоминай!</h2>

    <button class="btn" @click="goBack">Обратно к логину</button>
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.push('/login')
    }
  },
}
</script>