"use client";

// The URL on your server where CesiumJS's static files are hosted.

// window.CESIUM_BASE_URL = "/Cesium/";

import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

import { useEffect } from "react";
import { createWorldTerrain, Viewer } from "cesium";

const MapComponent = () => {
  useEffect(() => {
    const viewer = new Viewer("cesiumContainer", {
      terrainProvider: createWorldTerrain(),
    });
  }, []);
  return <div id="cesiumContainer" />;

  //   // // Your access token can be found at: https://ion.cesium.com/tokens.
  //   // // This is the default access token from your ion account
  //   Cesium.Ion.defaultAccessToken = process.env.CESIUM_API_TOKEN;

  //   // Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
  //   useEffect(() => {
  //     const viewer = new Cesium.Viewer("cesiumContainer", {
  //       terrainProvider: Cesium.createWorldTerrain(),
  //     });
  //   }, []);
  //   // Add Cesium OSM Buildings, a global 3D buildings layer.
  //   const buildingTileset = viewer.scene.primitives.add(
  //     Cesium.createOsmBuildings()
  //   );
  //   // Fly the camera to San Francisco at the given longitude, latitude, and height.
  //   viewer.camera.flyTo({
  //     destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
  //     orientation: {
  //       heading: Cesium.Math.toRadians(0.0),
  //       pitch: Cesium.Math.toRadians(-15.0),
  //     },
  //   });

  //   return <div id="cesiumContainer" style={{ height: "100vh" }}></div>;
};

export default MapComponent;
