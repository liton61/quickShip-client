"use client"
import Lottie from "lottie-react";
import React from "react";
import Map from '../../../../../public/WorldMap.json';

const WorldMap = () => {
  return (
    <div className="container m-auto">
      <Lottie loop={true} animationData={Map}></Lottie>
    </div>
  );
};

export default WorldMap;
