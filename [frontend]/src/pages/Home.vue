<template>
  <div class="dashboard-container">
    <div class="sidebar">
      <!-- Sidebar content -->
    </div>
    <div class="main-content">
      <div class="top-section">
        <!-- Top section content -->
      </div>
      <div class="bottom-section">
        <div class="chart-section">
          <h3 class="section-title">Sales Chart</h3>
          <div id="salesChart" class="chart"></div>
        </div>
        <div class="data-section">
          <div class="card">
            <h4 class="card-title">Total Users</h4>
            <div class="card-content">
              <h3 class="card-data">{{ totalUsers }}</h3>
            </div>
          </div>
          <div class="card">
            <h4 class="card-title">Total Orders</h4>
            <div class="card-content">
              <h3 class="card-data">{{ totalOrders }}</h3>
            </div>
          </div>
          <div class="card">
            <h4 class="card-title">Revenue</h4>
            <div class="card-content">
              <h3 class="card-data">{{ revenue }}</h3>
            </div>
          </div>
          <div class="card">
            <h4 class="card-title">New Customers</h4>
            <div class="card-content">
              <h3 class="card-data">{{ newCustomers }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { session } from '../data/session'

const totalUsers = ref(0)
const totalOrders = ref(0)
const revenue = ref(0)
const newCustomers = ref(0)

onMounted(async () => {
  // Simulate fetching data from API
  await fetchData()
})

const fetchData = async () => {
  // Simulate API calls to retrieve data
  totalUsers.value = 100
  totalOrders.value = 500
  revenue.value = 10000
  newCustomers.value = 50

  // Render sales chart
  renderSalesChart()
}

const renderSalesChart = () => {
  // Simulate rendering sales chart using a charting library like Chart.js
  // Replace this code with your actual charting implementation
  const chartElement = document.getElementById('salesChart')
  if (chartElement) {
    // Initialize and render your sales chart here
  }
}
</script>

<style scoped>
/* Custom styles for the dashboard */
.dashboard-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.sidebar {
  background-color: #f3f4f6;
}

.main-content {
  display: grid;
  gap: 20px;
}

.top-section {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px;
}

.bottom-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.section-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.chart {
  height: 300px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px;
}

.data-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.card {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px;
}

.card-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-data {
  font-size: 24px;
  font-weight: bold;
}
</style>
