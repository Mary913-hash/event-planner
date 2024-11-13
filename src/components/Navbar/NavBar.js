import React from 'react';
import styles from './NavBar.module.css';  // Import the CSS module

const Navbar = () => {
  return (
    <div>
  
     

      {/* Primary Navbar */}
      <nav className={`${styles.navbar} ${styles.navbarPrimary}`} data-bs-theme="dark">
        <div className="container-fluid">
          <a className={styles.navbarBrand} href="#">Navbar Primary</a>
        </div>
      </nav>

     
    </div>
  );
};

export default Navbar;
