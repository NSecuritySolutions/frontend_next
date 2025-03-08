import { Dispatch, FC, RefObject, SetStateAction, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree, useFrame, GroupProps } from '@react-three/fiber'
import { Vector3, Vector2, Quaternion, Raycaster, Plane, Bone, Group } from 'three'
import { useRef } from 'react'

interface CameraBannerObjProps {
  sceneProps: GroupProps
  area: RefObject<HTMLDivElement>
  setReady: Dispatch<SetStateAction<boolean>>
}

const CameraBannerObj: FC<CameraBannerObjProps> = ({ sceneProps, area, setReady }) => {
  const [corpusOnPosition, setCorpusOnPosition] = useState(true)
  const [standOnPosition, setStandOnPosition] = useState(true)
  const ref = useRef<Group>(null)
  const { scene } = useGLTF('/banner-camera-v7.glb', true)
  const standRef = useRef<Bone | null>(null)
  const corpusRef = useRef<Bone | null>(null)
  const { camera, gl, size, scene: threeScene, invalidate } = useThree()
  const mouse = useRef(new Vector2())
  const currentWidth = useRef(area.current?.clientWidth || window.innerWidth)
  const mouseOver = useRef(false)

  const corpusMinAngle = -Math.PI / 4
  const corpusMaxAngle = Math.PI / 4

  useEffect(() => {
    if (threeScene && camera) {
      setReady(true)
    }
  }, [threeScene, camera, setReady])

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
    let animationFrame: number
    const vector = new Vector3()
    const handleMouseMove = (event: MouseEvent) => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(() => {
        if (corpusRef.current && area.current) {
          const rectArea = area.current.getBoundingClientRect()
          const rect = gl.domElement.getBoundingClientRect()
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
      })
    }

    const handleMouseEnter = () => {
      mouseOver.current = true
      invalidate()
    }

    const handleMouseLeave = () => (mouseOver.current = false)

    const currentArea = area.current

    if (currentArea) {
      currentArea.addEventListener('mousemove', handleMouseMove)
      currentArea.addEventListener('mouseenter', handleMouseEnter)
      currentArea.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        currentArea.removeEventListener('mousemove', handleMouseMove)
        currentArea.removeEventListener('mouseenter', handleMouseEnter)
        currentArea.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [camera, gl, size, area, invalidate])

  useFrame(() => {
    if (!mouseOver.current && corpusOnPosition && standOnPosition) return
    invalidate()

    if (mouseOver.current) {
      if (standRef.current) {
        setCorpusOnPosition(false)
        setStandOnPosition(false)
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

          const clampedAngleY = Math.max(corpusMinAngle, Math.min(corpusMaxAngle, angleY))

          const resultQuaternion = new Quaternion().setFromAxisAngle(
            new Vector3(1, 0, 0),
            clampedAngleY,
          )

          corpusRef.current.quaternion.slerp(resultQuaternion, 0.05)
        }
      }
    } else {
      const ROTATION_THRESHOLD = 0.01

      if (standRef.current) {
        const targetQuaternion = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), -0.05)
        const angleDiff = standRef.current.quaternion.angleTo(targetQuaternion)

        if (angleDiff > ROTATION_THRESHOLD) {
          standRef.current.quaternion.slerp(targetQuaternion, 0.05)
        } else {
          setStandOnPosition(true)
        }
      }

      if (corpusRef.current) {
        const targetQuaternion = new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), 0)
        const angleDiff = corpusRef.current.quaternion.angleTo(targetQuaternion)

        if (angleDiff > ROTATION_THRESHOLD) {
          corpusRef.current.quaternion.slerp(targetQuaternion, 0.05)
        } else {
          setCorpusOnPosition(true)
        }
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
