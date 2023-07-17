<template>
  <div class="dashboard-page">
    <div class="content">
      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Created On</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(customer, index) in visibleCustomers" :key="customer.id">
              <td>{{ (currentPage - 1) * pageSize + index + 1 }}</td>
              <td>{{ customer.name }}</td>
              <td>{{ customer.description }}</td>
              <td>{{ customer.created_on }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pagination">
        <button class="page-button" :disabled="currentPage === 1" @click="previousPage">&lt;</button>
        <span class="page-info">{{ currentPage }} / {{ totalPages }}</span>
        <button class="page-button" :disabled="currentPage === totalPages" @click="nextPage">&gt;</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'

export default {
  setup() {
    const customers = ref([])
    const visibleCustomers = ref([])
    const pageSize = 10
    let currentPage = 1

    onMounted(async () => {
      try {
        const response = await fetch('/api/resource/Customer')
        if (response.ok) {
          const data = await response.json()
          customers.value = data.data
          updateVisibleCustomers()
        } else {
          console.error('Failed to fetch customer details:', response.status, response.statusText)
        }
      } catch (error) {
        console.error('Error fetching customer details:', error.message)
      }
    })

    const updateVisibleCustomers = () => {
      const startIndex = (currentPage - 1) * pageSize
      const endIndex = startIndex + pageSize
      visibleCustomers.value = customers.value.slice(startIndex, endIndex)
    }

    const previousPage = () => {
      currentPage--
      updateVisibleCustomers()
    }

    const nextPage = () => {
      currentPage++
      updateVisibleCustomers()
    }

    const createNewDocType = () => {
      // Add your create logic here
      console.log('Creating new DocType...')
    }

    const totalPages = computed(() => Math.ceil(customers.value.length / pageSize))

    onMounted(updateVisibleCustomers)

    return {
      visibleCustomers,
      currentPage,
      pageSize,
      totalPages,
      previousPage,
      nextPage,
      createNewDocType,
    }
  },
}
</script>

<style scoped>
.dashboard-page {
  padding: 20px;
}

.header {
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.subtitle {
  font-size: 14px;
  color: #888;
}

.content {
  margin-top: 20px;
}

.toolbar {
  margin-bottom: 20px;
}

.table-container {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 8px;
}

.table th {
  font-weight: bold;
  text-align: left;
}

.table tr:nth-child(even) {
  background-color: #f5f5f5;
}

.table tr td:first-child {
  text-align: center;
}

.table tr:last-child td {
  border-bottom: none;
}

.button {
  background-color: #2c5282;
  color: #fff;
  border-radius: 4px;
  padding: 8px 12px;
  font-weight: bold;
}

.pagination {
  text-align: center;
  margin-top: 20px;
}

.page-button {
  background-color: #2c5282;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  font-weight: bold;
  margin: 0 5px;
}

.page-info {
  font-size: 14px;
  font-weight: bold;
}
</style>
