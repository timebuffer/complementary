import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import './App.css';

function App() {
  const [color, setColor] = useState('#000000'); // Default color is black
  const [complementaryColor, setComplementaryColor] = useState('#ffffff'); // Default complementary color is white

  // Function to calculate the complementary color
  const calculateComplementaryColor = (hex) => {
    let colorInt = parseInt(hex.substring(1), 16); // Remove the '#' and parse the hex
    let compColorInt = 0xFFFFFF ^ colorInt; // Bitwise XOR to get the complement
    let compColorHex = compColorInt.toString(16).toUpperCase(); // Convert to hex
    return `#${('000000' + compColorHex).slice(-6)}`; // Ensure it’s always 6 digits
  };

  // Handle color change from the picker
  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
    setComplementaryColor(calculateComplementaryColor(newColor.hex));
  };

  return (
    <div className="App">
      <h1>Color Matching App</h1>
      <div className="color-picker-container">
        <h3>Select a Color:</h3>
        <ChromePicker color={color} onChange={handleColorChange} />
      </div>
      <div className="colors-display">
        <div className="color-box" style={{ backgroundColor: color }}>
          <p>Selected Color: {color}</p>
        </div>
        <div className="color-box" style={{ backgroundColor: complementaryColor }}>
          <p>Complementary Color: {complementaryColor}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
