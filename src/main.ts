import './style.css'
import { setupCanvas } from './canvas.ts'

export interface Size {
  height: number,
  width: number,
}

export interface Brush {
  color: string,
  size: number,
  mode: string
}

let size: Size = {
  height: 768,
  width: 768
}

export let brush: Brush = {
  color: '#000',
  size: 10,
  mode: 'brush'
}

document.getElementById('app')!.innerHTML = `
  <nav>
    <input type="color" name="brush-color" id="brush-color">
    <label for="brush-size">Brush Size</label>
    <input type="number" name="brush-size" id="brush-size" min="1" value="5">
    <select name="mode" id="mode">
      <option value="brush" selected>Brush</option>
      <option value="rainbow">Rainbow</option>
      <option value="eraser">Eraser</option>
    </select>
    <label for="canvas-height">Height</label>
    <input type="number" name="canvas-height" id="canvas-height" min="1" value="768">
    <label for="canvas-width">Width</label>
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
  .getElementById('mode')!
  .addEventListener('change', e => {
    const { value } = e.target as HTMLSelectElement
    brush = {
      ...brush,
      mode: value
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

