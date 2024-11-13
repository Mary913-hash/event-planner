import React from "react";
import CarCard from "../CarCard/CarCard"; // Assuming CarCard component exists
import styles from './CarList.module.css';

function CarList({ cars }) {
  return (
    <div className={styles.cardList}>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarList;