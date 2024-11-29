import React from 'react';
import Homebar from '../../../components/Homebar/Homebar';

const Certified = () => {
const styles = {
  donationCertificate: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: '#c62828',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  infoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  infoItemLabel: {
    fontWeight: 'bold',
  },
  donationItem: {
    marginBottom: '20px',
  },
  validationImage: {
    display: 'block',
    margin: '0 auto',
    maxWidth: '200px',
  },
};

return (
  <div style={styles.donationCertificate}>
    <header style={styles.header}>
      <h1>Donation Certificate</h1>
    </header>

    <section style={styles.section}>
      <h2>Donor Information</h2>
      <div style={styles.infoItem}>
        <span style={styles.infoItemLabel}>Name:</span>
        <span>MARIA DA SILVA</span>
      </div>
      <div style={styles.infoItem}>
        <span style={styles.infoItemLabel}>CPF:</span>
        <span>xxx.xxx.xxx-xx</span>
      </div>
    </section>

    <section style={styles.section}>
      <h2>Donation Details</h2>

      <div style={styles.donationItem}>
        <h3>1st Donation</h3>
        <div style={styles.infoItem}>
          <span style={styles.infoItemLabel}>Hemocentro:</span>
          <span>HEMOCENTRO DE SÃO PAULO</span>
        </div>
        <div style={styles.infoItem}>
          <span style={styles.infoItemLabel}>Location:</span>
          <span>São Paulo</span>
        </div>
        <div style={styles.infoItem}>
          <span style={styles.infoItemLabel}>Date:</span>
          <span>20/09/2022</span>
        </div>
      </div>

      <div style={styles.donationItem}>
        <h3>2nd Donation</h3>
        <div style={styles.infoItem}>
          <span style={styles.infoItemLabel}>Hemocentro:</span>
          <span>HEMOCENTRO DE SÃO PAULO</span>
        </div>
        <div style={styles.infoItem}>
          <span style={styles.infoItemLabel}>Date:</span>
          <span>24/04/2023</span>
        </div>
      </div>
    </section>

    <section style={styles.section}>
      <h2>Validation QR Code</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/280px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png" alt="Validation QR Code" style={styles.validationImage} />
    </section>

    <Homebar/>
  </div>
);
};

export default Certified;