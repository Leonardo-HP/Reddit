import {Sequence, AbsoluteFill, staticFile, Audio} from 'remotion/.';

import {BusquedaEnGoogle} from './Reddit/BusquedaEnGoogle/BusquedaEnGoogle';
import {FondoPapel} from './Reddit/FondoPapel';
import {FireFoxLogo} from './Reddit/FirefoxLogo/FireFoxLogo';
import {Carga} from './Reddit/Carga';

import {RedditLogo} from './Reddit/RedditLogo';
import {Temblor} from './Reddit/Temblor';
import {EscalaDesaparece} from './Reddit/FirefoxLogo/EscalaDesaparece';
import {Triangulos} from './Reddit/RedditLogin.tsx/Triangulos';

export const CompositionReddit = () => {
	return (
		<div>
			<AbsoluteFill>
				<Temblor>
					<FondoPapel />
				</Temblor>
			</AbsoluteFill>

			<AbsoluteFill>
				<Sequence from={50}>
					<EscalaDesaparece>
						<RedditLogo />
					</EscalaDesaparece>
				</Sequence>
			</AbsoluteFill>

			<AbsoluteFill>
				<Sequence from={220} durationInFrames={200}>
					<FireFoxLogo />
				</Sequence>
			</AbsoluteFill>

			<Sequence from={332} durationInFrames={50}>
				<Carga />
			</Sequence>

			<Sequence from={340} durationInFrames={500}>
				<BusquedaEnGoogle />
			</Sequence>

			<Sequence from={840}>
				<Triangulos />
			</Sequence>

			<Sequence from={18}>
				<Audio src={staticFile('Superhero.mp3')} />
			</Sequence>
		</div>
	);
};
