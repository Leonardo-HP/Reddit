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
	spring,
} from 'remotion/.';


export const RedditLogo = () => {
	const {durationInFrames, width, height} = useVideoConfig();

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

	const CaeLogo = interpolate(frame, [1, 10,15,16,25], [-400, 200,400,400,200], {
		extrapolateRight: 'clamp',
	});

  const CaeLogoIzq = interpolate(frame, [1,10,15,16,25], [-400,400,450,450,450], {
		extrapolateRight: 'clamp',
	});

  const Squish = interpolate(frame, [0,10,15,16,25], [400,400,200,200,400], {
		extrapolateRight: 'clamp',
	});



	return (
		<div>
		<AbsoluteFill>
      
				<Img
					src={staticFile('RedditLogo.png')}
          style={{

            width:'400px',
            height:` ${Squish}px `,
            translate:`${CaeLogoIzq}px ${CaeLogo}px `


                }}
				/>
			</AbsoluteFill>

	<AbsoluteFill>
				<Sequence from={96}>
					<Audio
						src={staticFile('Woosh.mp3')}
					
					/>
				</Sequence>
			</AbsoluteFill>


      


		</div>
	);
};
