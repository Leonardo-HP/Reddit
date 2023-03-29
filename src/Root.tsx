import {Composition} from 'remotion';
import {CompositionReddit} from './CompositionReddit';

export const RemotionRoot: React.FC = () => {
	return (
		<>
		<Composition
				id="Reddit"
				component={CompositionReddit}
				durationInFrames={1200}
				fps={30}
				width={1280}
				height={720}
			/>
				</>
	);
};
