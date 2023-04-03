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
} from 'remotion/.';

export const ClickOnSingIn: React.FC = () => {
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


  const zoomSizeAbajoIzquierda = interpolate(frame, [1,50,80,130], [1,3,3,1], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})
  const zoomXAbajoIzquierda = interpolate(frame, [1,50,80,130], [0,1400,1400,0 ], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})
  const ZoomYAbajoIzquierda = interpolate(frame, [1,50,80,130], [0,-900,-900,0 ], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})

	const zoomSizeArribaDerecha = interpolate(frame, [1,50,80,130], [1,3,3,1 ], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})
  const zoomXArribaDerecha = interpolate(frame, [1,50,80,130], [0,-1400,-1400,0 ], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})
  const ZoomYArribaDerecha = interpolate(frame, [1,50,80,130], [0,800,800,0 ], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})

	const signal = interpolate(frame, [50,55,60,65,70], [0,0.5,0,0.5,0 ], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})



	const MuevoCursorX = interpolate(driver, [1, 50], [0,-540], {
		extrapolateRight: 'clamp',
	});

	const MuevoCursorY = interpolate(driver, [1, 50],  [0, 190], {
		extrapolateRight: 'clamp',
	});


	const MuevoCursorX2 = interpolate(frame, [0, 50], [0, 530], {
		extrapolateRight: 'clamp',
	});

	const MuevoCursorY2 = interpolate(frame, [0, 50], [0, -415], {
		extrapolateRight: 'clamp',
	});




	return (
		<div>
			<div
				style={{
					width: '1280px',
					height: '720px',
					position:'absolute'

				}}
			>

				<AbsoluteFill>
					<Img
						src={staticFile('ImgTrianguloAbajoIzquierda.png')}
			
					/>
				</AbsoluteFill>
			</div>


  		<AbsoluteFill>
				<Img
					src={staticFile('Cursor.png')}
					style={{
						transform: `scale(0.02)`,
						translate: `${MuevoCursorX}px ${MuevoCursorY}px`,
					}}
				/>
			</AbsoluteFill>


  		<AbsoluteFill>
				<Img
					src={staticFile('Cursor.png')}
					style={{
						transform: `scale(0.02)`,
						translate: `${MuevoCursorX2}px ${MuevoCursorY2}px`,
					}}
				/>
			</AbsoluteFill>


			<AbsoluteFill>
				<Sequence from={100}>
					<Audio
						src={staticFile('Mouse Click Sound Effect.mp3')}
						startFrom={13}
					/>
				</Sequence>
			</AbsoluteFill>





		</div>
	);
};
