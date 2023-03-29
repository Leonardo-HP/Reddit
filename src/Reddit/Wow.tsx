import {useCallback, useEffect, useRef} from 'react';
import {AbsoluteFill, useVideoConfig, Video} from 'remotion';

export const Greenscreen: React.FC<{
	opacity: number;
}> = ({opacity}) => {
	const video = useRef<HTMLVideoElement>(null);
	const canvas = useRef<HTMLCanvasElement>(null);
	const {width, height} = useVideoConfig();
	// Process a frame
	const onVideoFrame = useCallback(
		(opacity: number) => {
			if (!canvas.current || !video.current) {
				return;
			}
			const context = canvas.current.getContext('2d');
			if (!context) {
				return;
			}
			context.drawImage(video.current, 0, 0, width, height);
			const imageFrame = context.getImageData(0, 0, width, height);
			const {length} = imageFrame.data;
			// If the pixel is very green, reduce the alpha channel
			for (let i = 0; i < length; i += 4) {
				const red = imageFrame.data[i + 0];
				const green = imageFrame.data[i + 1];
				const blue = imageFrame.data[i + 2];
				if (green > 100 && red < 100 && blue < 100) {
					imageFrame.data[i + 3] = opacity * 255;
				}
			}
			context.putImageData(imageFrame, 0, 0);
		},
		[height, width]
	);
	useEffect(() => {
		const {current} = video;
		if (!current || !current.requestVideoFrameCallback) {
			return;
		}
		let handle = 0;
		const callback = () => {
			onVideoFrame(opacity);
			handle = current.requestVideoFrameCallback(callback);
		};
		callback();
		return () => {
			current.cancelVideoFrameCallback(handle);
		};
	}, [onVideoFrame, opacity]);
	return (
		<AbsoluteFill>
			<AbsoluteFill>
				<Video
					ref={video}
					style={{opacity: 0}}
					startFrom={300}
					// If we access the data of a remote video, we must add this prop, and the remote video must have CORS enabled
					crossOrigin="anonymous"
					src="https://remotion-assets.s3.eu-central-1.amazonaws.com/just-do-it.mp4"
				/>
			</AbsoluteFill>
			<AbsoluteFill>
				<canvas ref={canvas} width={width} height={height} />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
