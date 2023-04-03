import {Component} from 'react';
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
	Img,
  Video,
  OffthreadVideo,
} from 'remotion/.';
import { Abogado } from './Abogado';

export const Preferencias: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const driver = spring({
		from: 0,
		to: 50,
		frame,
		fps,
		config: {
			mass: 2,
			stiffness: 20,
			damping: 30,
		},
	});

	const zoom = interpolate(frame, [0, 10, 750, 760], [1, 2, 2, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const zoomY = interpolate(frame, [0, 10,     100,110,   300, 550, 560,   700, 710], [100, 0,    0,140,  140,0,0,0     -0 ,100], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});







  
	const rotar = interpolate(frame, [90, 100, 150, 160], [1300, 900, 900, 1300], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});





	return (
		<div>
			<div
				style={{
					width: '1280px',
					height: '720px',

					translate: ' 0px 0px',
					position: 'absolute',
				}}
			>
				<AbsoluteFill>
					<Img
						src={staticFile('ImgTrianguloAbajoIzquierda.png')}
						style={{
							opacity: '1',
						}}
					/>
				</AbsoluteFill>

				<AbsoluteFill>
					<div
						style={{
							opacity: '0.5',
							width: '1280px',
							height: '720px',
							background: 'black',
						}}
					/>
				</AbsoluteFill>




				<AbsoluteFill>
					<OffthreadVideo playbackRate={1}
						src={staticFile('personalQuestions.mp4') }
            style={{
                        opacity: '1',
                        width: '300px',
                        height: '500px',
                        translate: `500px ${zoomY}px`,
                        borderRadius: '3%',
                        scale: `${zoom}`,
                        
                      }}
					
					/>
				</AbsoluteFill>
			</div>





		</div>
	);
};
