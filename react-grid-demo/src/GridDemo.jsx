import React from "react";
import RGL, { WidthProvider, Responsive } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF"];

const GridDemo = () => {
  const layouts = {
    lg: [
      { i: "1", x: 0, y: 0, w: 2, h: 2, minW: 1, maxW: 4, minH: 1, maxH: 4 },
      { i: "2", x: 2, y: 0, w: 2, h: 2, minW: 1, maxW: 4, minH: 1, maxH: 4 },
      { i: "3", x: 4, y: 0, w: 2, h: 2, minW: 1, maxW: 4, minH: 1, maxH: 4 },
      { i: "4", x: 0, y: 2, w: 2, h: 2, minW: 1, maxW: 4, minH: 1, maxH: 4 },
      { i: "5", x: 2, y: 2, w: 2, h: 2, minW: 1, maxW: 4, minH: 1, maxH: 4 },
    ],
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      width={1000}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 6, md: 4, sm: 2, xs: 2, xxs: 1 }}
      rowHeight={100}
    //   margin={[10, 10]}
    >
      {layouts.lg.map((item, index) => (
        <div
          key={item.i}
          style={{
            ...styles.gridItem,
            backgroundColor: colors[index % colors.length],
          }}
        >
          <p style={styles.text}>Item {item.i}</p>
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};

const styles = {
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    padding: "10px",
  },
  text: {
    color: "#fff",
    fontSize: "18px",
    fontWeight: "bold",
  },
};

export default GridDemo;
