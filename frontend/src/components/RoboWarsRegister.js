import React, { useState } from 'react';

const RoboWarsRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Computer Technology',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      department: 'Computer Technology',
    });
  };

  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(to right, #688eb7, #3c71a9)',
      color: '#fff',
      textAlign: 'center',
      padding: '20px',
      minHeight: '100vh',
    },
    container: {
      background: '#ffffff',
      padding: '20px',
      width: '50%',
      margin: 'auto',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
      color: '#333',
    },
    heading: {
      color: '#5fa8f7',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
    },
    label: {
      fontWeight: 'bold',
      marginTop: '10px',
      color: '#42658b',
    },
    input: {
      padding: '10px',
      marginTop: '5px',
      border: '2px solid #35689e',
      borderRadius: '5px',
      width: '100%',
      fontSize: '16px',
    },
    button: {
      marginTop: '15px',
      padding: '10px',
      backgroundColor: '#7aa6e4',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '5px',
      fontSize: '16px',
    },
    output: {
      marginTop: '20px',
      background: '#e0ffe0',
      padding: '15px',
      borderRadius: '5px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      color: '#333',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Register for Robo Wars</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label} htmlFor="name">Full Name:</label>
          <input
            style={styles.input}
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />

          <label style={styles.label} htmlFor="email">Email:</label>
          <input
            style={styles.input}
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label style={styles.label} htmlFor="phone">Phone Number:</label>
          <input
            style={styles.input}
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />

          <label style={styles.label} htmlFor="department">Department:</label>
          <select
            style={styles.input}
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option>Computer Technology</option>
            <option>Information Technology</option>
            <option>Electronics and Communication</option>
            <option>Instrumentation</option>
          </select>

          <button type="submit" style={styles.button}>Register</button>
        </form>

        {submitted && (
          <div style={styles.output}>
            <h2>Registration Successful!</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Department:</strong> {formData.department}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoboWarsRegister;
