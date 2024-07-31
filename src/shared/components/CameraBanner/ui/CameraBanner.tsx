import { FC, RefObject, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree, useFrame, GroupProps } from '@react-three/fiber'
import { Vector3, Vector2, Quaternion, AxesHelper, Raycaster, Plane, Bone, Group } from 'three'
import { useRef } from 'react'

interface CameraBannerObjProps {
  sceneProps: GroupProps
  area: RefObject<HTMLDivElement>
}

const CameraBannerObj: FC<CameraBannerObjProps> = ({ sceneProps, area }) => {
  const ref = useRef<Group>(null)
  const { scene } = useGLTF('/banner-camera-v4.glb')
  const standRef = useRef<Bone | null>(null)
  const corpusRef = useRef<Bone | null>(null)
  const { camera, gl, size } = useThree()
  const mouse = useRef(new Vector2())
  // const currentWidth = useRef(window.innerHeight)
  const currentWidth = useRef(area.current?.clientWidth || window.innerWidth)
  const mouseOver = useRef(false)

  const corpusMinAngle = Math.PI / 4
  const corpusMaxAngle = (3 * Math.PI) / 4

  useEffect(() => {
    if (scene) {
      const stand = scene.getObjectByName('Stand') as Bone
      const corpus = scene.getObjectByName('Corpus') as Bone
      if (stand) {
        standRef.current = stand
      }
      if (corpus) {
        corpusRef.current = corpus
      }
    }
  }, [scene])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Преобразуем координаты мыши
      if (corpusRef.current && area.current) {
        const rectArea = area.current.getBoundingClientRect()
        const rect = gl.domElement.getBoundingClientRect()
        const vector = new Vector3()
        corpusRef.current.getWorldPosition(vector)
        vector.project(camera)
        const objectLeft = (vector.x / 2 + 0.5) * size.width
        const objectTop = (-vector.y / 2 + 0.5) * size.height
        const leftSide = rect.left + objectLeft
        const topSide = rect.top + objectTop
        const x = event.clientX - leftSide
        const y = -(event.clientY - topSide)

        currentWidth.current = event.clientX >= leftSide ? rectArea.width - leftSide : leftSide

        mouse.current.set(x, y)
      }
    }

    const handleMouseEnter = () => (mouseOver.current = true)
    const handleMouseLeave = () => (mouseOver.current = false)

    if (area.current) {
      area.current.addEventListener('mousemove', handleMouseMove)
      area.current.addEventListener('mouseenter', handleMouseEnter)
      area.current.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        if (area.current) {
          area.current.removeEventListener('mousemove', handleMouseMove)
          area.current.removeEventListener('mouseenter', handleMouseEnter)
          area.current.removeEventListener('mouseleave', handleMouseLeave)
        }
      }
    }
  }, [camera, gl, size, area.current])

  useFrame(() => {
    if (mouseOver.current) {
      if (standRef.current) {
        const diff = new Vector2()
        diff.sub(mouse.current)

        // Используем разницу для расчета угла
        const angle = Math.atan2(-diff.x, 100)
        const resultQuaternion = new Quaternion().setFromAxisAngle(
          new Vector3(0, 1, 0),
          angle + Math.PI / 6,
        )

        standRef.current.quaternion.slerp(resultQuaternion, 0.05)
      }
      if (corpusRef.current) {
        const planeNormal = new Vector3()
        planeNormal.copy(camera.position)
        const plane = new Plane()
        plane.setFromNormalAndCoplanarPoint(
          planeNormal,
          new Vector3().copy(camera.position).multiplyScalar(0.3),
        )

        const raycaster = new Raycaster()
        raycaster.setFromCamera(mouse.current, camera)
        const intersects = raycaster.ray.intersectPlane(plane, new Vector3())

        if (intersects) {
          const target = intersects
          target.z = Math.abs(target.z) + 100
          const dir = new Vector3()
          dir.subVectors(target, corpusRef.current.position).normalize()

          const angleY = Math.atan2(dir.y, Math.abs(dir.z))

          const clampedAngleY = Math.max(
            corpusMinAngle,
            Math.min(corpusMaxAngle, angleY + Math.PI / 2),
          )

          const resultQuaternion = new Quaternion().setFromAxisAngle(
            new Vector3(1, 0, 0),
            clampedAngleY,
          )

          corpusRef.current.quaternion.slerp(resultQuaternion, 0.05)
        }
      }
    } else {
      if (standRef.current) {
        const resultQuaternion = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), 0)

        standRef.current.quaternion.slerp(resultQuaternion, 0.05)
      }
      if (corpusRef.current) {
        const resultQuaternion = new Quaternion().setFromAxisAngle(
          new Vector3(1, 0, 0),
          Math.PI / 2,
        )

        corpusRef.current.quaternion.slerp(resultQuaternion, 0.05)
      }
    }
  })

  return (
    <group ref={ref} dispose={null} {...sceneProps}>
      <primitive object={scene} />
    </group>
  )
}

export default CameraBannerObj
