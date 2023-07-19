<template>
  <div class="dashboard-page">
    <div class="container mx-auto px-4 py-8">
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th class="py-2">#</th>
              <th class="py-2">Name</th>
              <th class="py-2">Customer Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(customer, index) in visibleCustomers" :key="customer.id">
              <td class="py-2">{{ (currentPage - 1) * pageSize + index + 1 }}</td>
              <td class="py-2">{{ customer.name }}</td>
              <td class="py-2">{{ customer.customer_name }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex justify-between items-center mt-4">
        <button
          class="px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600"
          :disabled="currentPage === 1"
          @click="previousPage"
        >
          &lt;
        </button>
        <span class="text-gray-600">{{ currentPage }} / {{ totalPages }}</span>
        <button
          class="px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600"
          :disabled="currentPage === totalPages"
          @click="nextPage"
        >
          &gt;
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import { ref, computed, onMounted } from 'vue'
import { fetchCustomers, createNewCustomer } from '../data/customerController'

// Import Vuetify CSS file
import 'vuetify/dist/vuetify.min.css'
export default {
  setup() {
    const customers = ref([])
    const visibleCustomers = ref([])
    const pageSize = 10
    const currentPage = ref(1)

    onMounted(async () => {
      try {
        customers.value = await fetchCustomers()
        updateVisibleCustomers()
      } catch (error) {
        console.error('Error fetching customer details:', error)
      }
    })

    const updateVisibleCustomers = () => {
      const startIndex = (currentPage.value - 1) * pageSize
      const endIndex = startIndex + pageSize
      visibleCustomers.value = customers.value.slice(startIndex, endIndex)
    }

    const previousPage = () => {
      currentPage.value--
      updateVisibleCustomers()
    }

    const nextPage = () => {
      currentPage.value++
      updateVisibleCustomers()
    }

    const createNewDocType = () => {
      createNewCustomer()
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
