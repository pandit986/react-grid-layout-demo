# React-Grid-Layout Notes

## Introduction
React-Grid-Layout is a powerful library for creating **draggable**, **resizable**, and **responsive** grid layouts in React applications. It is widely used for dashboards, admin panels, and other UI components where users need flexibility in arranging elements.

## Basic Concepts
### 1. Grid Layout
- The layout consists of **rows and columns**.
- Items can be **moved** and **resized**.
- Each item has a unique `key`.

### 2. Props in React-Grid-Layout
- `layout`: Defines the initial grid structure.
- `cols`: Specifies the number of columns in the grid.
- `rowHeight`: Sets the height of each row.
- `width`: Defines the total grid width.
- `onLayoutChange`: Function to handle layout updates.

## Basic Example
```jsx
import React from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const MyGrid = () => {
  const layout = [
    { i: "1", x: 0, y: 0, w: 2, h: 1 },
    { i: "2", x: 2, y: 0, w: 2, h: 2 },
    { i: "3", x: 0, y: 1, w: 1, h: 1 },
  ];

  return (
    <GridLayout 
      className="layout" 
      layout={layout} 
      cols={4} 
      rowHeight={100} 
      width={600}
    >
      <div key="1" style={{ background: "lightblue" }}>Item 1</div>
      <div key="2" style={{ background: "lightgreen" }}>Item 2</div>
      <div key="3" style={{ background: "lightcoral" }}>Item 3</div>
    </GridLayout>
  );
};

export default MyGrid;
```

## Features
1. **Draggable Items** - Move items by dragging.
2. **Resizable Items** - Resize items by dragging the bottom-right corner.
3. **Responsive Layout** - Adjusts grid for different screen sizes.
4. **Saving Layout** - Use `onLayoutChange` to store the updated layout.

