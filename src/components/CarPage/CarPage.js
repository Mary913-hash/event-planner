import React, { useState, useEffect } from "react";
import CarList from "../CarList/CarList";
import NewCarForm from "../NewCarForm/NewCarForm";
import Search from "../Search/Search";
import styles from './CarPage.module.css'; // Import CSS module

function CarPage() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]); // State for filtered cars

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("http://localhost:3000/cars");
        const data = await response.json();
        setCars(data);
        setFilteredCars(data); // Set filtered cars to all cars initially
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  // Add a new car to the lists
  const handleAddCar = (newCar) => {
    setCars([...cars, newCar]);
    setFilteredCars([...cars, newCar]); // Update filtered cars as well
  };

  // Delete a car from the lists
  const handleDeleteCar = async (id) => {
    try {
      await fetch(`http://localhost:3000/cars/${id}`, { method: "DELETE" });
      const updatedCars = cars.filter((car) => car.id !== id);
      setCars(updatedCars);
      setFilteredCars(updatedCars); // Update filtered cars as well
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  // Filter cars based on search input
  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredCars(cars); // Show all cars if search term is empty
    } else {
      const filtered = cars.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCars(filtered);
    }
  };

  return (
    <div className={styles.carPage}>
      <Search onSearch={handleSearch} /> {/* Pass handleSearch as onSearch prop */}
      <NewCarForm onAddCar={handleAddCar} /> {/* Form for adding a new car */}
      <h2>Cars Available</h2>
      <CarList
        cars={filteredCars} // Use filteredCars for displaying
        onDelete={handleDeleteCar}
      />
    </div>
  );
}

export default CarPage;
