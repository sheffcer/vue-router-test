<template>
  <the-navbar :visible="isAuth"></the-navbar>
  <div class="container with-nav">
  <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'

export default {
  data() {
    return {
      isAuth: false
    }
  },
  methods: {
    login () {
      this.isAuth = true
      if (this.$route.query.page) {
        this.$router.push(this.$route.query.page)
      } else {
        this.$router.push('/dashboard')
      }
    },
    logout () {
      this.isAuth = false
      this.$router.push({
        path: 'login',
        query: {
          page: this.$route.path
        }
      })
    }
  },
  components: {
    TheNavbar
    },
  provide() {
    return {
      login: this.login,
      logout: this.logout,
      emails: [
        {id: 1, theme: 'Купил себе PlayStation 5', body: 'Бла бла бла'},
        {id: 2, theme: 'Эмигрант', body: 'Мазафака мазафака мазафака'},
        {id: 3, theme: 'Хочу изучить весь Mazafaka!', body: 'Епта'},
        {id: 4, theme: 'Чашечки', body: 'два по 0,75 за милых дам'},
        {id: 5, theme: 'А что там на счет Vue Hooks?', body: 'Бла бла бла'}
      ]
    }
  }
}
</script>

<style>
</style>
