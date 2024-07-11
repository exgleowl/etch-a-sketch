import { brush, Size } from './main.ts'

let paint = false
let x = 0
let y = 0

export function setupCanvas(canvas: HTMLCanvasElement, { height, width }: Size) {
  const ctx = canvas.getContext('2d')!
  ctx.canvas.height = height
  ctx.canvas.width = width

  const getPosition = (e: MouseEvent) => {
    const { left, top } = canvas.getBoundingClientRect()
    x = e.clientX - left
    y = e.clientY - top
  }

  canvas.addEventListener('mousedown', e => {
    paint = true
    getPosition(e)
  })

  canvas.addEventListener('mouseup', () => paint = false)

  canvas.addEventListener('mousemove', e => {
    if (!paint)
      return

    ctx.beginPath()

    ctx.lineWidth = brush.size
    ctx.lineCap = 'round'
    ctx.strokeStyle = brush.color

    ctx.moveTo(x, y)
    getPosition(e)
    ctx.lineTo(x, y)

    ctx.stroke()
  })

  canvas.addEventListener('click', e => {
    getPosition(e)    

    ctx.beginPath()
    ctx.fillStyle = brush.color
    ctx.roundRect(x - Math.round(brush.size / 2), y - Math.round(brush.size / 2), brush.size, brush.size, 50)
    ctx.fill()
  })
}

