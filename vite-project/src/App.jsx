import { useState } from 'react'

function App() {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f4f4f4',
      minHeight: '100vh',
    },
    header: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '20px 0',
      marginBottom: '20px',
    },
    serviceCard: {
      backgroundColor: '#fff',
      padding: '15px',
      margin: '10px auto',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      width: '80%',
      maxWidth: '500px',
    },
    footer: {
      marginTop: '40px',
      color: '#666',
    },
  };

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'SEO Optimization'
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Our Services</h1>
        <p>We provide top-notch digital solutions</p>
      </header>

      {services.map((service, index) => (
        <div key={index} style={styles.serviceCard}>
          <h2>{service}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      ))}

      <footer style={styles.footer}>
        <p>Contact us at <strong>info@myservice.com</strong></p>
      </footer>
    </div>
  );
}

export default App;
