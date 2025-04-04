import React, { useEffect, useRef } from 'react'
import { useGLTF } from "@react-three/drei";
import { a } from '@react-spring/three'
import islandScene from '../assets/3d/island.glb';
import { useFrame, useThree } from '@react-three/fiber';

const Island = ({isRotating,setRotating,setIsRotating,setCurrentStage,...props}) => {
  const islandRef = useRef();
  const currentStageRef = useRef(0);

  const {gl,viewport}=useThree();
  const { nodes, materials } = useGLTF(islandScene);

  const  lastX=useRef(0);
  const rotationSpeed=useRef(0);
  const dampingFactor=0.95;

  const handlePointerDown=(e)=>{
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX=e.touches ? e.touches[0].clientX:e.clientX;

    lastX.current=clientX;
  }

  const handlePointerUp=(e)=>{
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);}


  const handlePointerMove=(e)=>{
    e.stopPropagation();
    e.preventDefault();
    

    if(isRotating){
      const clientX=e.touches ? e.touches[0].clientX:e.clientX;

      const delta =(clientX - lastX.current)/viewport.width;
  
      islandRef.current.rotation.y += delta*0.01*Math.PI;
      lastX.current=clientX;
  
      rotationSpeed.current=delta*0.01*Math.PI;
    }
  }
  const handleKeyDown=(e)=>{
    if(e.key==='ArrowLeft '){
      if(!isRotating){
        setRotating(true);
      }
      islandRef.current.rotation.y +=0.01*Math.PI;
    }else if(e.key==='ArrowRight'){
      if(!isRotating){
        setRotating(true);
      }
      islandRef.current.rotation.y -=0.01*Math.PI;
    }
  }
  const handleKeyUp=(e)=>{
    if(e.key==='ArrowLeft'||e.key==='ArrowRight'){
      setRotating(false);
    }
  }

  const normalizeAngle=(angle) => {
    const twoPi = 2 * Math.PI;
    return ((angle % twoPi) + twoPi) % twoPi;
  };

  useFrame(()=>{
    if(!isRotating){
      rotationSpeed.current *=dampingFactor;

      if(Math.abs(rotationSpeed.current)<0.0001){
        rotationSpeed.current=0;
      }
      islandRef.current.rotation.y +=rotationSpeed.current;}
      
      
      const angle= normalizeAngle(islandRef.current.rotation.y);
      let newStage=1;
      const pi=Math.PI;


      if (angle >= 0 && angle < pi / 2) {//0 degrees
        newStage=3;
      } else if (angle >= pi / 2 && angle < pi) { //90 degrees
        newStage=4;
      } else if (angle >= pi && angle < 3 * pi / 2) {//180 degrees
        newStage=1;
      } else {//270 degrees
        newStage=2;
      }
      if (newStage !== currentStageRef.current) {
        currentStageRef.current = newStage;
        setCurrentStage(newStage);
      }
    });
      
    
  

  

  useEffect(()=>{
    const canvas=gl.domElement;
    canvas.addEventListener('pointermove',handlePointerMove);
    canvas.addEventListener('pointerdown',handlePointerDown);
    canvas.addEventListener('pointerup',handlePointerUp);
    document.addEventListener('keydown',handleKeyDown);
    document.addEventListener('keyup',handleKeyUp);

    return ()=>{
      canvas.removeEventListener('pointermove',handlePointerMove);
      canvas.removeEventListener('pointerdown',handlePointerDown);
      canvas.removeEventListener('pointerup',handlePointerUp);
      document.removeEventListener('keydown',handleKeyDown);
      document.removeEventListener('keyup',handleKeyUp);
    }
  },
  [gl,handlePointerMove,handlePointerDown,handlePointerUp]
  )
  return (
    <a.group ref={islandRef} {...props} >
      <mesh geometry={nodes.polySurface944_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface945_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface946_tree2_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface947_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface948_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface949_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.pCube11_rocks1_0.geometry} material={materials.PaletteMaterial001} />
    </a.group>
  )
};



export default Island;
