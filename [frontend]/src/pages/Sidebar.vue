<template>
    <div class="sidebar">
      <h3 class="logo">Dashboard Site</h3>
      <ul class="nav-list">
        <li v-for="page in pages" :key="page.id" :class="{ active: page.route === currentPage }">
          <a @click="handlePageClick(page.route)">{{ page.name }}</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      pages: {
        type: Array,
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
    },
  }
  </script>
  
  <style scoped>
  .sidebar {
    background-color: #2c5282;
    color: #fff;
    padding: 20px;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .nav-list li {
    margin-bottom: 10px;
  }
  
  .nav-list li a {
    color: #fff;
    text-decoration: none;
  }
  
  .nav-list li.active a {
    font-weight: bold;
  }
  </style>
  