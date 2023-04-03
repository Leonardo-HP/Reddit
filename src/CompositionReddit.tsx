import {Sequence, AbsoluteFill, staticFile, Audio} from 'remotion/.';

import {BusquedaEnGoogle} from './Reddit/BusquedaEnGoogle/BusquedaEnGoogle';
import {FondoPapel} from './Reddit/FondoPapel';
import {FireFoxLogo} from './Reddit/FirefoxLogo/FireFoxLogo';
import {Carga} from './Reddit/Carga';

import {RedditLogo} from './Reddit/RedditLogo';
import {Temblor} from './Reddit/Temblor';
import {EscalaDesaparece} from './Reddit/FirefoxLogo/EscalaDesaparece';
import {Triangulos} from './Reddit/RedditLogin.tsx/Triangulos';

import { ClickOnSingIn } from './Reddit/RedditLogin.tsx/ClickOnSignIn';
import { SignIn } from './Reddit/RedditLogin.tsx/SignIn';
import { IngresandoCorreo } from './Reddit/RedditLogin.tsx/IngresandoCorreo';
import { Preferencias } from './Reddit/RedditLogin.tsx/Preferencias';
import { Intereses } from './Reddit/RedditLogin.tsx/Intereses';


export const CompositionReddit = () => {
	return (
		<div>
			<AbsoluteFill>
				<Temblor>
					<FondoPapel />
				</Temblor>
			</AbsoluteFill>

			<AbsoluteFill>
				<Sequence from={50} durationInFrames={200}>
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

			<Sequence from={840} durationInFrames={160}>
				<Triangulos />
			</Sequence>

			<Sequence from={1000} durationInFrames={130}>
				<ClickOnSingIn/>
			</Sequence>


			<Sequence from={1130} durationInFrames={500}>
				<SignIn/>
			</Sequence>



			<Sequence from={1630} durationInFrames={830}>
				<IngresandoCorreo/>
			</Sequence>


			<Sequence from={2460} durationInFrames={115}>
				<Preferencias/>
			</Sequence>
			<Sequence from={2575} durationInFrames={535}>
				<Intereses/>
			</Sequence>






			<Sequence from={18} durationInFrames={100}>
				<Audio src={staticFile('Superhero.mp3')} />
			</Sequence>
		</div>
	);
};
