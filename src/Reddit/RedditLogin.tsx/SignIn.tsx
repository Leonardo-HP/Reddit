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


  
  
  const abogadoY = interpolate(frame, [1,10,100,110], [750,420,420,750 ], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})
	
  const abogadoX = interpolate(frame, [1,10,100,110], [1300,1000,1000,1300 ], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})
	
	const abogadoRotate = interpolate(frame, [1,10,100,110], [90,0,0,90 ], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})
	
	const bocaAbogadoY = interpolate(frame, [10,20,30,40,50,60,70,80], [519,523,519,523,519,523,519,523 ], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})
	
	const bocaAbogadoOpacity = interpolate(frame, [10,11,99,100], [0,1,1,0 ], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})

	





  
	const zoomSizeArribaDerecha = interpolate(frame, [1,50,80,130], [1,3,3,1 ], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})
  const zoomXArribaDerecha = interpolate(frame, [1,50,80,130], [0,-1400,-1400,0 ], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})
  const ZoomYArribaDerecha = interpolate(frame, [1,50,80,130], [0,800,800,0 ], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})

	const signal = interpolate(frame, [50,55,60,65,70], [0,0.5,0,0.5,0 ], {extrapolateRight: "clamp" , extrapolateLeft: "clamp"})



	return (
		<div>




			<div
				style={{
					width: '1280px',
					height: '720px',
	
					translate: ' 0px 0px',
					position:'absolute'

				}}
			>




       



				<AbsoluteFill>
					<Img
						src={staticFile('ImgTrianguloAbajoIzquierda.png')}
						style={{
						opacity:  '1'}}
					/>
				</AbsoluteFill>






			</div>


       
      <Img
						src={staticFile('Abogado.png')}
						style={{
              width: '200px',
              height: '300px',
						opacity:  '1',
          translate:` ${abogadoX}px ${abogadoY}px`,
          	position:"absolute",
						transform:`rotate(${abogadoRotate}deg)`
          }}
					/>

       
<Img
						src={staticFile('bocaAbogadoNegra.png')}
						style={{
							width: '650px',
              height: '400px',

					
          translate:`1107px 519px`,
          	position:"absolute",
						opacity: `${bocaAbogadoOpacity}`,
						
					
						
          }}
					/>




       
<Img
						src={staticFile('bocaAbogado.png')}
						style={{
							width: '650px',
              height: '400px',

					
          translate:`1107px ${bocaAbogadoY}px`,
          	position:"absolute",
						opacity: `${bocaAbogadoOpacity}`,
						
					
						
          }}
					/>


			



	

    
		</div>
	);
};
