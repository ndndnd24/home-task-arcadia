"use client";

import React, { useEffect, useState } from "react";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import axios from "axios";

const MapComponent = () => {
  const [coordinates, setCoordinates] = useState(null);
  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await axios.get("/api/coordinates");
        setCoordinates(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    fetchCoordinates();
    console.log(coordinates);

    // Initialize Cesium viewer
    const viewer = new Cesium.Viewer("cesiumContainer", {
      terrainProvider: Cesium.createWorldTerrain(),
    });

    // Set initial camera position
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(19.0532484, 47.4986567, 10000),
    });

    // Add a point at Budapest"s coordinates
    const entity = viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(19.0532484, 47.4986567),
      point: {
        pixelSize: 10,
        color: Cesium.Color.RED,
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 2,
      },
    });

    return () => {
      // Clean up Cesium viewer
      if (viewer && !viewer.isDestroyed()) {
        viewer.destroy();
      }
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div id="cesiumContainer" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default MapComponent;
