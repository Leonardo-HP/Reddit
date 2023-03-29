import {Children, Component} from 'react';
import {
	useVideoConfig,
	Sequence,
	Composition,
	AbsoluteFill,
	staticFile,
	Audio,
	interpolate,
	useCurrentFrame,
	spring,
} from 'remotion/.';

export const ShrinkingLogoFirefox: React.FC<{
children: React.ReactNode;

}> = ({children}) => {


  const frame = useCurrentFrame()
  
  const size = interpolate(frame, [0,5,10], [0,1, 0], {extrapolateLeft: "clamp",extrapolateRight: "clamp", })
  
  return (
	
<AbsoluteFill
     style={{
        scale: `${size}`,
  }}
  >
    {children}
</AbsoluteFill>

	);
};
