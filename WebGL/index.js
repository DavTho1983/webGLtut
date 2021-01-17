import React, {useEffect} from 'react'
import Init from './init'

export default function WebGL () {

    useEffect(() => {
        Init('webgl')
    }, [])

    return <canvas id="webgl" width="400" height="400" style={{ border: '1px solid black'}}></canvas>
}