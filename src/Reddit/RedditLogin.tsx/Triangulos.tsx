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

export const Triangulos: React.FC = () => {
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


  const zoomSizeAbajoIzquierda = interpolate(frame, [1,50,70,120], [1,3,3,1], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})
  const zoomXAbajoIzquierda = interpolate(frame, [1,50,70,120], [0,1400,1400,0 ], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})
  const ZoomYAbajoIzquierda = interpolate(frame, [1,50,70,120], [0,-900,-900,0 ], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})

	const zoomSizeArribaDerecha = interpolate(frame, [1,50,70,120], [1,3,3,1 ], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})
  const zoomXArribaDerecha = interpolate(frame, [1,50,70,120], [0,-1400,-1400,0 ], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})
  const ZoomYArribaDerecha = interpolate(frame, [1,50,70,120], [0,800,800,0 ], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})


	return (
		<div>



			<div
				style={{
					width: '1280px',
					height: '720px',
					clipPath: 'polygon(0 100%, 100% 100%, 0 0)',
					translate: ' 0px 0px',
					position:'absolute'

				}}
			>
				<AbsoluteFill>
					<Img
						src={staticFile('ImgTrianguloAbajoIzquierda.png')}
						style={{
							transform:` scale(${zoomSizeAbajoIzquierda})`,
							 translate: `${zoomXAbajoIzquierda}px ${ZoomYAbajoIzquierda}px `}}
					/>
				</AbsoluteFill>
			</div>

			<div
				style={{
					width: '1280px',
					height: '720px',
					clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
					translate: ' 0px 0px',
					position:'absolute'
				}}
			>
				<AbsoluteFill>
					<Img
						src={staticFile('ImgTrianguloArribaDerecha.png')}
						style={{
							
							transform:` scale(${zoomSizeArribaDerecha})`,
							translate: `${zoomXArribaDerecha}px ${ZoomYArribaDerecha}px `}}
					/>
				</AbsoluteFill>
			</div>

		</div>
	);
};
