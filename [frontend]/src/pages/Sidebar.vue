<template>
  <div class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <h3 class="navbar-logo">Master Site</h3>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <a
          v-for="page in pages"
          :key="page.id"
          :class="['navbar-item', { active: page.route === currentPage }]"
          @click="handlePageClick(page.route)"
        >
          <span class="icon"><i :class="page.icon"></i></span>
          <span class="text">{{ page.name }}</span>
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="user">
            <span class="icon"><i class="fas fa-user-circle"></i></span>
            <span class="name">{{ userName }}</span>
          </div>
        </div>
        <div class="navbar-item">
          <a class="logout" @click="handleLogout">
            <span class="icon"><i class="fas fa-sign-out-alt"></i></span>
            <span class="text">Logout</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    pages: {
      type: Array,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      currentPage: '',
    }
  },
  methods: {
    handlePageClick(route) {
      this.currentPage = route
      this.$emit('page-clicked', route)
    },
    handleLogout() {
      // Add your logout logic here
      console.log('Logout clicked');
    },
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

