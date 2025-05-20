// src/components/ThreeViewer.jsx
import React, { Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Stats } from '@react-three/drei'

function TokyoModel() {
  const { scene, animations } = useGLTF('/LittlestTokyo.glb')
  const { mixer } = useThree()
  useFrame((state, delta) => mixer?.update(delta))

  React.useEffect(() => {
    if (animations.length > 0) {
      const m = new THREE.AnimationMixer(scene)
      m.clipAction(animations[0]).play()
      mixer.current = m
    }
  }, [animations, scene, mixer])

  return <primitive object={scene} scale={0.01} position={[1, 1, 0]} />
}

const ThreeViewer = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [5, 2, 8], fov: 40 }}>
        <Suspense fallback={null}>
          <TokyoModel />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls target={[0, 0.5, 0]} enablePan={false} enableDamping />
        <Stats />
      </Canvas>
    </div>
  )
}

export default ThreeViewer
