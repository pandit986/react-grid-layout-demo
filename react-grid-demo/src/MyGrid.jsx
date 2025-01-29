import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const MyGrid = () => {

 const [layouts, setLayout] = useState();

  // Define the layout for grid items
  const layout = [
    { i: "1", x: 0, y: 0, w: 2, h: 2 },
    { i: "2", x: 2, y: 0, w: 4, h: 1 },
    { i: "3", x: 6, y: 0, w: 2, h: 2 },
  ];

  console.log(layouts,"layouts")
  return (
    <div style={{ padding: "20px", }}>
      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
        React Grid Layout Demo
      </h2>
      <GridLayout
        className="layout"
        layout={layout}
        cols={10} // Total columns in the grid
        rowHeight={100} // Height of each row in pixels
        width={1000} // Total width of the grid in pixels
        isDraggable={true} // Enable dragging
        isResizable={true} // Enable resizing
        onLayoutChange={(newLayout) => setLayout(newLayout)}
      >
        {/* Grid Items with inline styles */}
        <div key="1" style={{ background: "#87CEFA", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid black" }}>1</div>
        <div key="2" style={{ background: "#98FB98", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid black" }}>2</div>
        <div key="3" style={{ background: "#FF6347", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid black" }}>3</div>
      </GridLayout>
    </div>
  );
};

export default MyGrid;
