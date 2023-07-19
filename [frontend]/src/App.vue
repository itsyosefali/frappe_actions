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
      currentPage: '/login', 
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
.navbar {
  background-color: #2c5282;
  color: #fff;
  padding: 20px;
}

.navbar-logo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 0;
}

.navbar-menu {
  display: flex;
  justify-content: space-between;
}

.navbar-start {
  display: flex;
  align-items: center;
}

.navbar-item {
  margin-right: 10px;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.navbar-item:hover {
  color: #fff;
  text-decoration: none;
}

.navbar-item.active {
  font-weight: bold;
}

.icon {
  margin-right: 8px;
}

.user {
  display: flex;
  align-items: center;
}

.user .icon {
  margin-right: 8px;
}

.user .name {
  font-size: 14px;
}

.logout {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.logout:hover {
  color: #fff;
  text-decoration: none;
}
</style>
