// CarCard.js
import React from "react";
import styles from './CarCard.module.css';

function CarCard({ car }) {
  return (
    <div className={styles.cardItem}>
      {/* Car image covering the top of the card */}
      <img
        src={car.image || 'default-image.jpg'}
        alt={car.name}
        className={styles.cardImage}
      />

      {/* Car content (name, description, price) */}
      <div className={styles.cardContent}>
        <div className={styles.cardText}>
          <h3>{car.name}</h3>
          <p>{car.description}</p>
          <p>Price: ${car.price}</p>
        </div>
      </div>
    </div>
  );
}

export default CarCard;