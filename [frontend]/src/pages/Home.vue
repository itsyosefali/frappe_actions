<template>
  <div class="max-w-3xl py-12 mx-auto">
    <h2 class="font-bold text-lg text-gray-600 mb-4">
      Welcome {{ session.user }}!
    </h2>

    <div v-if="todos.length > 0">
      <h3 class="font-bold text-lg text-gray-600 mb-2">To-Do List:</h3>
      <table class="w-full">
        <thead>
          <tr>
            <th class="py-2">Description</th>
            <th class="py-2">Status</th>
            <th class="py-2">Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="todo in todos" :key="todo.name">
            <td class="py-2" :class="getDescriptionClass(todo.description)">
              <div v-html="todo.description"></div>
            </td>
            <td class="py-2">
              <Button :type="getStatusButtonClass(todo.status)" disabled>
                {{ todo.status }}
              </Button>
            </td>
            <td class="py-2">
              <Button :type="getPriorityButtonClass(todo.priority)" disabled>
                {{ todo.priority }}
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>No todos found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { session } from '../data/session'
import { Button } from 'frappe-ui'

const todos = ref([])

onMounted(async () => {
  try {
    const response = await fetch('/api/resource/ToDo?fields=["description","status","priority"]')
    if (response.ok) {
      const data = await response.json()
      todos.value = data.data
    } else {
      console.error('Failed to fetch To-Do list:', response.status, response.statusText)
    }
  } catch (error) {
    console.error('Error fetching To-Do list:', error.message)
  }
})

// Get the appropriate button class based on the status
const getStatusButtonClass = (status) => {
  switch (status) {
    case 'Open':
      return 'primary'
    case 'In Progress':
      return 'warning'
    case 'Completed':
      return 'success'
    default:
      return 'secondary'
  }
}

// Get the appropriate button class based on the priority
const getPriorityButtonClass = (priority) => {
  switch (priority) {
    case 'High':
      return 'danger'
    case 'Medium':
      return 'warning'
    case 'Low':
      return 'success'
    default:
      return 'secondary'
  }
}

// Determine the class for the description cell based on its content
const getDescriptionClass = (description) => {
  // You can add custom logic here to assign different classes based on the content
  return 'py-2'
}
</script>

<style scoped>
/* Custom styles for the home page */
h2 {
  color: #2c5282;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
  padding: 8px;
}

thead th {
  background-color: #f7fafc;
}

tbody tr:nth-child(even) {
  background-color: #f7fafc;
}

.Button.primary {
  background-color: #38b2ac;
  color: #fff;
}

.Button.secondary {
  background-color: #a0aec0;
  color: #fff;
}

.Button.success {
  background-color: #48bb78;
  color: #fff;
}

.Button.warning {
  background-color: #ecc94b;
  color: #fff;
}

.Button.danger {
  background-color: #f56565;
  color: #fff;
}
</style>
