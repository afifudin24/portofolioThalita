import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

export function loadGLTFModel(scene, path, options = {}) {
  const { receiveShadow = true, castShadow = true } = options

  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    // Setup DRACOLoader
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco/') // Pastikan path benar
    loader.setDRACOLoader(dracoLoader)

    loader.load(
      path,
      gltf => {
        const obj = gltf.scene
        obj.name = 'dog'
        obj.position.y = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        resolve(obj)
      },
      undefined,
      error => {
        reject(error)
      }
    )
  })
}
