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
} from 'remotion/.';


export const FondoPapel = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();

	return (
		<div>

		<AbsoluteFill>
	 <Img src={staticFile("textura-blanca.jpg")} />
    </AbsoluteFill>


		</div>
	);
};
