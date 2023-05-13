"use client";

import React, { useEffect } from "react";
import * as Cesium from "cesium";

const MapComponent = () => {
  Cesium.Ion.defaultAccessToken = process.env.CESIUM_API_TOKEN;
  
  useEffect(() => {
    // Initialize Cesium viewer
    const viewer = new Cesium.Viewer("cesiumContainer", {
      terrainProvider: Cesium.createWorldTerrain(),
    });

    // Set initial camera position
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(19.0532484, 47.4986567, 10000),
    });

    // Add a point at Budapest's coordinates
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

  return <div style={{ height: "100vh" }} id="cesiumContainer" />;
};

export default MapComponent;
