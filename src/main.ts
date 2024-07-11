import './style.css'
import { setupCanvas } from './canvas.ts'

export interface Size {
  height: number,
  width: number,
}

export interface Brush {
  color: string,
  size: number
}

let size: Size = {
  height: 768,
  width: 768
}

export let brush: Brush = {
  color: '#000',
  size: 10,
}

document.getElementById('app')!.innerHTML = `
  <nav>
    <label for="brush-color">Brush Color</label>
    <input type="color" name="brush-color" id="brush-color">
    <label for="brush-size">Brush Size</label>
    <input type="number" name="brush-size" id="brush-size" min="1" value="5">
    <label for="canvas-height">Canvas Height</label>
    <input type="number" name="canvas-height" id="canvas-height" min="1" value="768">
    <label for="canvas-width">Canvas Width</label>
    <input type="number" name="canvas-width" id="canvas-width" min="1" value="768">
  </nav>
  <canvas id="canvas"></canvas>
`

const canvasEl = document.querySelector<HTMLCanvasElement>('#canvas')!

setupCanvas(canvasEl, size)

document
  .getElementById('brush-color')!
  .addEventListener('input', e => {
    const { value } = e.target as HTMLInputElement
    brush = {
      ...brush,
      color: value
    }
  })

document
  .getElementById('brush-size')!
  .addEventListener('input', e => {
    const { value } = e.target as HTMLInputElement
    brush = {
      ...brush,
      size: Number(value)
    }
  })

document
  .getElementById('canvas-height')!
  .addEventListener('input', e => {
    const { value } = e.target as HTMLInputElement
    size = {
      ...size,
      height: Number(value)
    }
    setupCanvas(canvasEl, size)
  })

document
  .getElementById('canvas-width')!
  .addEventListener('input', e => {
    const { value } = e.target as HTMLInputElement
    size = {
      ...size,
      width: Number(value)
    }
    setupCanvas(canvasEl, size)
  })

