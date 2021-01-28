<template>
  <div>
    <h2>{{email.theme}}</h2>
    <p>{{email.body}}</p>
    <button class="btn">Закрыть</button>
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
      return this.emails.find(e => e.id == this.mailId)
    }
  }
}
</script>

<style scoped>

</style>