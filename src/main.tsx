import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Table: {
            bodySortBg: "#9E867E",
            headerBg: "#7C5A4F",
            headerColor: "#fff",
            headerSplitColor: "#fff",
            headerSortHoverBg: "#9E867E",
            headerSortActiveBg: "#9E867E",
            rowHoverBg: "#9E867E",
            borderColor: "#000",
            colorIcon:"rgba(255, 255, 255, 0.65)",
            cellFontSize: 14,
            headerBorderRadius: 10,
          },
          Input:{
            hoverBorderColor: "#9E867E",
            activeBorderColor: "#9E867E",
            fontSize: 16,
            colorBorder: "#7C5A4F",
            colorTextPlaceholder: "#7C5A4F",
          },
          Pagination:{
            colorPrimary: "#7C5A4F",
            colorPrimaryBorder: "#7C5A4F",
            colorPrimaryHover: "#9E867E",
            colorBgTextHover: "rgba(124, 90, 79, 0.5)",
            itemActiveBg:"rgba(124, 90, 79, 0.8)",
          }
        },
        
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
