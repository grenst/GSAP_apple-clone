import { PerspectiveCamera, View } from "@react-three/drei"
import Lights from "./Lights"
import IPhone from "./IPhone"
import Loader from "./Loader"
import { Suspense } from "react"

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationSize, size, item }) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`border-2 border-red-500 w-full h-full ${index === 2} ? 'right-[-100%] : ''`}
    >
      {/* Ambient light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <Suspense fallback={<Loader />}>
        <IPhone 
          scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
          item={item}
          size={size}
        />
      </Suspense>
    </View>
  )
}

export default ModelView