export const registerUser = async (formData, endpoint = '/api/users') => {
    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to register');
      }
  
      return { success: true, data };
    } catch (error) {
      console.error('API error:', error);
      return { success: false, message: error.message };
    }
  };
  