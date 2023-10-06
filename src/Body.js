import React, { useState } from 'react';
import Plant from './Plant';
import brinjalImage from './brinjal.png';
import bMelonImage from './bMelon.jpeg';
import broccoliImage from './broccoli.jpeg';
import cabbageImage from './cabbage.jpeg';
import cauliImage from './cauli.jpeg';
import cucumberImage from './cucumber.jpeg';
import onionsImage from './onions.jpeg';
import peasImage from './peas.jpeg';
import radishImage from './radish.jpeg';
import tomatoImage from './tomato.jpeg';
import wateringCanImage from './wateringCan.png'; 

function Body() {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const numRows = 5;
  const numCols = 5;
  
  const [grid, setGrid] = useState(() => {
    const initialGrid = [];
    for (let i = 0; i < numRows; i++) {
      initialGrid.push(Array.from(Array(numCols), () => ({ plant: null })));
    }
    return initialGrid;
  });

  function openModal() {
    setSelectedPlant(null);
    document.getElementById('myModal').style.display = 'block';
  }

  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }

  const plantImages = [
    bMelonImage,
    broccoliImage,
    cabbageImage,
    cauliImage,
    cucumberImage,
    onionsImage,
    peasImage,
    radishImage,
    tomatoImage
  ];

  function openWateringModal() {
    document.getElementById('wateringModal').style.display = 'block';
  }

  function closeWateringModal() {
    document.getElementById('wateringModal').style.display = 'none';
  }

  function addPlantToGrid(row, col, image) {
    setGrid(prevGrid => {
      const newGrid = [...prevGrid];
      newGrid[row][col].plant = <Plant key={row * numCols + col} image={image} onClick={() => removePlantFromGrid(row, col)} />;
      return newGrid;
    });
  }

  function removePlantFromGrid(row, col) {
    setGrid(prevGrid => {
      const newGrid = [...prevGrid];
      newGrid[row][col].plant = null;
      return newGrid;
    });
  }

  return (
    <div className="body">
      <div className="left-container">
        <button className="open-modal-btn" onClick={openModal}>
          Choose Your Plant
        </button>
        
        <button className="open-modal-btn" onClick={openWateringModal}>
          Water the Plants
        </button>

        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            {plantImages.map((image, index) => (
              <div key={index}>
                <button onClick={() => setSelectedPlant(image)}>Plant {index + 1}</button>
                <img
                  src={image}
                  alt={`Plant ${index + 1}`}
                  className="modal-image"
                  onClick={() => setSelectedPlant(image)}
                />
              </div>
            ))}
            <p>Hello! Welcome to our plant selection. Choose your favorite plant!</p>
          </div>
        </div>

        <div id="wateringModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeWateringModal}>&times;</span>
            <img src={wateringCanImage} alt="Watering Can" className="modal-image" />
          </div>
        </div>
      </div>

      <div className="right-container">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((cell, colIndex) => (
              <div key={colIndex} className="grid-cell" onClick={() => addPlantToGrid(rowIndex, colIndex, selectedPlant)}>
                {cell.plant}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
