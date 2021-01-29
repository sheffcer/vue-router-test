<template>
  <div>
    <h2>{{email[0]}}</h2>
    <!-- <p>{{email[0].body}}</p> -->
    <button class="btn" @click="$router.push('/login')">Закрыть</button>
  </div>
</template>

<script>
export default {
  inject: ['emails'],
  props: {
    mailId: String
  },
  computed: {
    email () {
      // return this.emails.find(e => e.id === this.mailId)
      return this.emails.filter(e => e.id === this.mailId)
    }
  }
}
</script>

<style scoped>

</style>