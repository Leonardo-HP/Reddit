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

export const BusquedaEnGoogle = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();

	const frame = useCurrentFrame();

	const EscalaLogo = interpolate(frame, [0, 10], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const widthLinea = interpolate(frame, [40, 60], [0, 250], {
		extrapolateRight: 'clamp',
	});

	const widthLinea2 = interpolate(frame, [0, 290,310], [250,250, 0], {
		extrapolateRight: 'clamp',
	});

	const Opacity = interpolate(frame, [39, 40], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const EscalaGoogle = interpolate(frame, [60, 80,320,340], [1,4,4,1], {
		extrapolateRight: 'clamp',
	});

	const PosicionGoogleX = interpolate(frame, [60, 80,320,340], [0, 1200,1200,0], {
		extrapolateRight: 'clamp',
	});

	const PosicionGoogleY = interpolate(frame, [60, 80,320,340], [0, 1500,1500,0], {
		extrapolateRight: 'clamp',
	});


	return (
		<div>
			<Sequence durationInFrames={60}>
				<AbsoluteFill>
					<Img
						src={staticFile('Google.png')}
						style={{
							transform: `scale(${EscalaLogo})`,
							translate: `0 30px`,
						}}
					/>
				</AbsoluteFill>
				<AbsoluteFill
					style={{
						translate: '160px 90px',
					}}
				>
					<div
						style={{
							height: 5,
							width: `${widthLinea}px`,
							borderRadius: 14 / 2,
							backgroundColor: 'red',
							opacity: `${Opacity}`,
						}}
					/>
				</AbsoluteFill>
			</Sequence>

			<Sequence from={60}>
				
				<AbsoluteFill style={
{

transform:`scale(${EscalaGoogle})`,
translate:`${PosicionGoogleY}px ${PosicionGoogleX}px`,

}


				}>
				
				<AbsoluteFill>
					<Video
						src={staticFile('Escribir.mp4')}
						style={{
							translate: `0 30px`,
						}}
					/>

		
				</AbsoluteFill>





				<AbsoluteFill
						style={{
							height: 5,
							width: `${widthLinea2}px`,
							borderRadius: 14 / 2,
							backgroundColor: 'red',
							translate: '160px 90px'
						}}
					/>
</AbsoluteFill>



			</Sequence>


<Sequence from={173} durationInFrames={10}>
			<AbsoluteFill>
					<Img
						src={staticFile('wrong.png')}
						style={{
							transform:'scale(0.1)',
							translate: `80px 45px`,
						}}
					/>

		
				</AbsoluteFill>


				</Sequence>




			<Sequence from={40}>
				<Audio src={staticFile('SlideUp.mp3')} />
			</Sequence>

			<Sequence from={170}>
				<Audio src={staticFile('Wrong.mp3')} startFrom={12} />
			</Sequence>

			<Sequence from={270}>
				<Audio src={staticFile('Correct.mp3')}  />
			</Sequence>


		</div>
	);
};
