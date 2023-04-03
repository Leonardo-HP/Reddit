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
import { Abogado } from './Abogado';

export const SignIn: React.FC = () => {
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

	const zoom = interpolate(frame, [90, 100, 150, 160], [1, 2.5, 2.5, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const zoomY = interpolate(frame, [90, 100, 150, 160], [100, 500, 500, 100], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const arriba = interpolate(frame, [90, 100, 150, 160], [-340, 0, 0, -340], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const abajo = interpolate(frame, [90, 100, 150, 160], [1040, 520, 520, 1040], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const izquierda = interpolate(frame, [90, 100, 150, 160], [-400,0, 0, -400], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const derecha = interpolate(frame, [90, 100, 150, 160], [1300, 900, 900, 1300], {
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
					<Img
						src={staticFile('signUp.png')}
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

<Sequence from={200}>
<Abogado/>


</Sequence>



<AbsoluteFill>
					<div
						style={{
					
							width: '1280px',
							height: '340px',
							background: 'black',
							translate: `0px ${arriba}px`,
							overflow:'hidden'
						}}
					/>
				</AbsoluteFill>

				<AbsoluteFill>
					<div
						style={{
						
							width: '1280px',
							height: '200px',
							background: 'black',
							translate: `0px ${abajo}px`,
							overflow:'hidden'
						}}
					/>
				</AbsoluteFill>
zxxc
				<AbsoluteFill>
					<div
						style={{
						
							width: '350px',
							height: '720px',
							background: 'black',
							translate: `${izquierda}px 0px`,
							overflow:'hidden'
						
						}}
					/>
				</AbsoluteFill>

				<AbsoluteFill>
					<div
						style={{
						
							width: '380px',
							height: '720px',
							background: 'black',
							translate: `${derecha}px 0px`,
							overflow:'hidden'
				
						}}
					/>
				</AbsoluteFill>


		</div>
	);
};
