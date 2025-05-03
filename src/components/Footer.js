import React from 'react';

function Footer() {
  return (
    <footer style={{ padding: '1rem', textAlign: 'center', background: '#003366', color: 'white' }}>
      <p>&copy; {new Date().getFullYear()} Project X LLC. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
