<template>
  <div class="app-container">
    <Sidebar :pages="pages" @page-clicked="setCurrentPage" />
    <div class="main-content">
      <router-view :key="currentPage" />
    </div>
  </div>
</template>

<script>
import Sidebar from './pages/Sidebar.vue'

export default {
  data() {
    return {
      pages: [
        { id: 1, name: 'Dashboard', route: '/' },
        { id: 2, name: 'Users', route: '/users' },
        { id: 3, name: 'Orders', route: '/orders' },
        { id: 4, name: 'Revenue', route: '/revenue' },
      ],
      currentPage: '/',
    }
  },
  methods: {
    setCurrentPage(route) {
      this.currentPage = route
      this.$router.push(route)
    },
  },
  components: {
    Sidebar,
  },
}
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
}
</style>
