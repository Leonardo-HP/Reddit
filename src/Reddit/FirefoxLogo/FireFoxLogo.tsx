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
import {DotFirefox} from './DotReddit';
import {MoveFirefoxLogo} from './MoveFirefoxLogo';
import {ShrinkingLogoFirefox} from './ShrinkingLogorFirefox';
import {StagingLogoFirefox} from './StagingLogoReddit';

export const FireFoxLogo = () => {
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

	const MuevoCursorX = interpolate(driver, [1, 50], [670, 10], {
		extrapolateRight: 'clamp',
	});

	const MuevoCursorY = interpolate(driver, [1, 50], [670, 10], {
		extrapolateRight: 'clamp',
	});


	return (
		<div>
			<Sequence durationInFrames={100}>
				<AbsoluteFill>
					<Img
						src={staticFile('firefoxLogo.png')}
						style={{transform: `scale(0.1)`, translate: '0px -150px'}}
					/>
				</AbsoluteFill>
			</Sequence>

			<Sequence from={100} durationInFrames={5}>
				{' '}
				<AbsoluteFill>
					<Img
						src={staticFile('firefoxLogo.png')}
						style={{transform: `scale(0.09)`, translate: '0px -150px'}}
					/>
				</AbsoluteFill>
			</Sequence>

			<Sequence from={105}>
				<AbsoluteFill>
					<Img
						src={staticFile('firefoxLogo.png')}
						style={{transform: `scale(0.1)`, translate: '0px -150px'}}
					/>
				</AbsoluteFill>
			</Sequence>

			<AbsoluteFill>
				<Audio
					src={staticFile('Pop sound effect.mp3')}
					startFrom={23}
					endAt={40}
					volume={2}
				/>
			</AbsoluteFill>

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
				<Sequence from={100}>
					<Audio
						src={staticFile('Mouse Click Sound Effect.mp3')}
						startFrom={13}
					/>
				</Sequence>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					translate: ' 0px  150px',
				}}
			>
				<StagingLogoFirefox>
					<MoveFirefoxLogo>
						<ShrinkingLogoFirefox>
							<DotFirefox />
						</ShrinkingLogoFirefox>
					</MoveFirefoxLogo>
				</StagingLogoFirefox>
			</AbsoluteFill>
		</div>
	);
};
