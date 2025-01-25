// import React from 'react'
// import styles from '../assets/header.module.css'

// const Header = () => {
//   return (
//     <header className={styles.header}>
//         <div className={styles.logo}>
//           <img src='/images/logo.png'/>
//         </div>
//         <div className={styles.links}>
//             <a>About Us</a>
//             <a>Products</a>
//             <a>Why VAMCO</a>
//             <a>Insights</a>
//             <a>Resources</a>
//             <a>Contact Us</a>
//           </div>
//           <div className={styles.registerButton}>
//             <button style={{
//               backgroundColor: 'transparent', 
//               border:'1px solid rgba(234, 35, 40, 1)', 
//               borderRadius:'4px',
//               padding:'10px 35px',
//               fontWeight:'400',
//               color:'rgba(234, 35, 40, 1)'}}>
//               Login
//             </button>
//             <button style={{
//               backgroundColor:'rgba(234, 35, 40, 1)', 
//               color:'#fff', 
//               border: 'none', 
//               padding:'11px 35px',
//               fontWeight:'400',
//               borderRadius:'4px'}}>
//               Create Account
//             </button>
//           </div>
//     </header>
//   )
// }

// export default Header

import React, { useState } from 'react';
import styles from '../assets/header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="Logo" />
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>

      <div className={`${styles.menu} ${menuOpen ? styles.active : ''}`}>
        <div className={styles.links}>
          <a href="#">About Us</a>
          <a href="#">Products</a>
          <a href="#">Why VAMCO</a>
          <a href="#">Insights</a>
          <a href="#">Resources</a>
          <a href="#">Contact Us</a>
        </div>
        <div className={styles.registerButton}>
          <button
            style={{
              backgroundColor: 'transparent',
              border: '1px solid rgba(234, 35, 40, 1)',
              borderRadius: '4px',
              padding: '10px 35px',
              fontWeight: '400',
              color: 'rgba(234, 35, 40, 1)',
            }}
          >
            Login
          </button>
          <button
            style={{
              backgroundColor: 'rgba(234, 35, 40, 1)',
              color: '#fff',
              border: 'none',
              padding: '11px 35px',
              fontWeight: '400',
              borderRadius: '4px',
            }}
          >
            Create Account
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;