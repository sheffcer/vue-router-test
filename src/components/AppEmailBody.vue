<template>
  <div v-for="item in email" :key="item">
    <h2>{{item.title}}</h2>
    <p>{{item.body}}</p>
    <button class="btn" @click="$router.push('/mail')">Закрыть</button>
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