import React from "react";
import {
  AbsoluteFill,
  interpolate,
 
  useCurrentFrame,

} from "remotion";
 
export const Temblor: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {

  const frame = useCurrentFrame();
 

 
  const y = interpolate(frame, [0,1,2], [0,-5,5]);
 
  return (
    <AbsoluteFill
      style={{
        translate: `(${y})`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};