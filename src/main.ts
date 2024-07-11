import './style.css'
import { setupCanvas } from './canvas.ts'

document.getElementById('app')!.innerHTML = `
  <canvas id="canvas"></canvas>
`

setupCanvas(document.querySelector<HTMLCanvasElement>('#canvas')!)

