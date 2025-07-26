import React, { useState } from 'react';

const AppDevelopment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Computer Technology',
    eventName: 'App Development',
    screenshot: null, // ✅ New field for payment screenshot
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      screenshot: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.screenshot) {
      setErrorMessage('Please upload your payment screenshot.');
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('event', formData.eventName);
    data.append('screenshot', formData.screenshot);

    try {
      const res = await fetch('http://localhost:5000/api/upload-payment', {
        method: 'POST',
        body: data,
      });

      const result = await res.json();

      if (res.ok) {
        setSubmittedData(formData);
        setErrorMessage('');
        setFormData({
          name: '',
          email: '',
          phone: '',
          department: 'Computer Technology',
          eventName: 'App Development',
          screenshot: null,
        });
      } else {
        setSubmittedData(null);
        setErrorMessage(result.message || 'Upload failed.');
      }
    } catch (err) {
      setErrorMessage('Something went wrong while uploading.');
      console.error(err);
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Register for App Development Workshop</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Full Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            style={styles.input}
          />

          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            style={styles.input}
          />

          <label style={styles.label}>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
            style={styles.input}
          />

          <label style={styles.label}>Department:</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            style={styles.input}
          >
            <option>Computer Technology</option>
            <option>Information Technology</option>
            <option>Electronics and Communication</option>
            <option>Instrumentation</option>
          </select>

          <label style={styles.label}>Scan & Pay:</label>
          <img src="/images/qr-code.png" alt="QR Code" style={{ width: '200px', margin: '10px 0' }} />

          <label style={styles.label}>Upload Payment Screenshot:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
            style={{ marginTop: '10px' }}
          />

          <button type="submit" style={styles.button}>Register</button>
        </form>

        {submittedData && (
          <div style={styles.output}>
            <h2>Registration Successful!</h2>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Phone:</strong> {submittedData.phone}</p>
            <p><strong>Department:</strong> {submittedData.department}</p>
            <p><strong>Event:</strong> {submittedData.eventName}</p>
            <p>Payment screenshot uploaded ✅</p>
          </div>
        )}

        {errorMessage && (
          <div style={styles.errorOutput}>
            <h2>Error</h2>
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
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
  errorOutput: {
    marginTop: '20px',
    background: '#f8d7da',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    color: '#721c24',
  },
};

export default AppDevelopment;
