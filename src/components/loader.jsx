import React from 'react'
import {Html , useProgress} from '@react-three/drei'

const Loader = () => {


    const {progress} = useProgress()
  return (
    <Html center>

        <div className="text-white text-xl font-bold">
                 {progress.toFixed(0)} % loaded
        </div>
    </Html>
  )
}

export default Loader