"use client"
import { Tilt } from "react-tilt";


const TiltWrapper = ({ children }) => {
    return (
      <Tilt>
        {children}
      </Tilt>
    );
  };

  export default TiltWrapper;