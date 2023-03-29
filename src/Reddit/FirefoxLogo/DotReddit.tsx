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
} from 'remotion/.';

export const DotFirefox: React.FC = () => {

	return (
	
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: 50,
          width: 14,
          borderRadius: 14 / 2,
          backgroundColor: "yellow",
        }}
      />
    </AbsoluteFill>

	);
};
