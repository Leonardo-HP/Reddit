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

export const EscalaDesaparece: React.FC<{
children: React.ReactNode;

}> = ({children}) => {


  const frame = useCurrentFrame()
  
  const size = interpolate(frame, [100,120], [1,27 ], {extrapolateLeft: "clamp" })
  
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
