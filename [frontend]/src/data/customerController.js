import axios from 'axios';
export async function fetchCustomers() {
    try {
      const response = await axios.get('/api/resource/Customer', {
        params: {
          fields: JSON.stringify(['name', 'customer_name']),
          limit: 100, // Set the limit to retrieve all customers
        },
      });
  
      if (response.status === 200) {
        console.log(response);
        return response.data.data;
      } else {
        console.error('Failed to fetch customer details:', response.status, response.statusText);
        return [];
      }
    } catch (error) {
      console.error('Error fetching customer details:', error.message);
      return [];
    }
  }
  
  
  
  
  
  export function createNewCustomer() {
    // Add your create logic here
    console.log('Creating new customer...')
  }
  