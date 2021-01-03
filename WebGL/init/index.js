import GLC from '../GLCommander/index'

export default function Init (id) {
    const canvas = document.querySelector(`#${id}`)

    let r = 0

    const render = () => {
        GLC.clear(r, 0.0, 0.0, 1.0)
        r += 0.001
        window.requestAnimationFrame(render)
    }

    if (!canvas) {
        return
    }

    const gl = canvas.getContext('webgl')

    if (!gl) {
        return
    }

    GLC.init(gl)
    window.requestAnimationFrame(render)
    
}