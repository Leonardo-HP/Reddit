import {Component} from 'react';
import {
	useVideoConfig,
	Sequence,
	Composition,
	AbsoluteFill,
	staticFile,
	Audio,
  Video,
  interpolate,
  OffthreadVideo,
  Img,
	useCurrentFrame,
} from 'remotion/.';


export const Carga = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();

	const frame = useCurrentFrame();

	const Rotacion = interpolate(frame, [0,50], [0,720

	], {
		extrapolateRight: 'clamp',
	});


	return (
	
  <div>
	
   <Img src={staticFile("carga.png")} style={
{transform: `rotate(${Rotacion}deg)  scale(0.1)`,
translate:	`390px 100px` 
	 }} />
  
		</div>
	);
};
