//frontend/src/utlis/api.js
const BASE_URL = 'http://localhost:5000/api'; // Change to your production URL when deploying

// Register a user to a specific event (registration)
export async function registerUser(data) {
  try {
    const response = await fetch(`${BASE_URL}/registrations/register`, {  // Ensure '/register' is added
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const result = await response.json();
      return { success: false, message: result.message || 'Registration failed' };
    }

    const result = await response.json();
    return { success: true, message: 'Registration successful', ...result };
  } catch (error) {
    console.error('Network error:', error);
    return { success: false, message: 'Network error' };
  }
}

// Create a new user
export async function createUser(data) {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const result = await response.json();
      return { success: false, message: result.message || 'User creation failed' };
    }

    const result = await response.json();
    return { success: true, message: 'User created successfully', ...result };
  } catch (error) {
    console.error('Network error:', error);
    return { success: false, message: 'Network error' };
  }
}

// Get all events
export async function getEvents() {
  try {
    const response = await fetch(`${BASE_URL}/events`);
    if (!response.ok) {
      const result = await response.json();
      return { success: false, message: result.message || 'Unable to fetch events' };
    }

    const result = await response.json();
    return { success: true, events: result };
  } catch (error) {
    console.error('Error fetching events:', error);
    return { success: false, message: 'Unable to fetch events' };
  }
}
