import React, {useRef, useState} from 'react';
import { Canvas, useFrame} from "react-three-fiber";
import {softShadows, MeshWobbleMaterial, OrbitControls} from "@react-three/drei";
// import {Box} from "@react-three/drei";
import {useSpring, a} from "react-spring/three"
softShadows();
const Box = ({position, args, color, speed, factor}) => {
    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
    const [expand, setExpand] = useState(false);
    const props = useSpring({
        scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1]
    });
    return(
        <a.mesh onClick={() => setExpand(!expand)} scale={props.scale} castShadow position={position} ref={mesh}>
            <boxBufferGeometry attach="geometry" args={args} />
            <MeshWobbleMaterial attach="material" color={color} speed={speed} factor={factor}/>
        </a.mesh>
    );
};

const Wabble = () => {
    return(
        <>
        <Canvas shadowMap colorManagement camera={{position: [-5, 2, 10], fov: 60}}> {/*No HTML elements are allowed withing Canvas since it uses only three js elements*/}
            <ambientLight intensity={0.3}/> 
            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={0.5} />
            <directionalLight 
            castShadow
            position={[0, 10, 0]} 
            intensity={1.0} 
            shadow-mapSize-width={1024} 
            shadow-mapSize-height={1024} 
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
            />
            <group>
                <mesh receiveShadow rotation={[-Math.PI/2, 0, 0]} position={[0,-3, 0]}>
                    <planeBufferGeometry attach="geometry" args={[100, 100]} />
                    <shadowMaterial attach="material" opacity={0.3}/>
                </mesh>
            </group>
            <Box position={[0,-0.5,0]} args={[3, 2, 1]} color="lightblue" speed={0.2} factor={0.2}/>
            <Box position={[-2,1,-5]} color="pink" speed={0.9} factor={1} />
            <Box position={[5,1,-2]} color="pink" speed={0.9} factor = {1}/>
            <OrbitControls />
            {/* <Box>
                <meshStandardMaterial attach="material" />
            </Box> */}
        </Canvas>
        </>
    )   
}

export default Wabble;