
import { useState } from "react";

export default function RandomColor() {
  const [color, setColor] = useState("#000000");
  const [colorType, setColorType] = useState("hex");

  const generateRandomColor = () => {
    if (colorType === "hex") {
      const hex = Math.floor(Math.random() * 16777215).toString(16);
      setColor(`#${hex.padStart(6, '0')}`);
    } else {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      setColor(`rgb(${r}, ${g}, ${b})`);
    }
  };

  return (
    <div style={{
      width: '100%',
      height: '400px',
      backgroundColor: color,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '20px'
    }}>
      <button 
        onClick={() => setColorType("hex")}
        style={{
          padding: '10px 20px',
          backgroundColor: colorType === "hex" ? "#007bff" : "#6c757d",
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Generate HEX Color
      </button>
      <button 
        onClick={() => setColorType("rgb")}
        style={{
          padding: '10px 20px',
          backgroundColor: colorType === "rgb" ? "#007bff" : "#6c757d",
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Generate RGB Color
      </button>
      <button 
        onClick={generateRandomColor}
        style={{
          padding: '15px 30px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Generate Random Color
      </button>
      <div style={{
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
      }}>
        {color}
      </div>
    </div>
  );
}
