import React from "react";
import {
  AbsoluteFill,
  interpolate,
 
  useCurrentFrame,

} from "remotion";
 
export const MoveFirefoxLogo: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {

  const frame = useCurrentFrame();
 

 
  const y = interpolate(frame, [0, 10], [-90, -180]);
 
  return (
    <AbsoluteFill
      style={{
        translate: `0 ${y}px`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};