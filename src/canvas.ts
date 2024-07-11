let paint = false
let x = 0
let y = 0

export function setupCanvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')!
  ctx.canvas.width = 768
  ctx.canvas.height = 768

  const getPosition = (e: MouseEvent) => {
    const { left, top } = canvas.getBoundingClientRect()
    x = e.clientX - left
    y = e.clientY - top
  }

  document.addEventListener('mousedown', e => {
    paint = true
    getPosition(e)
  })

  document.addEventListener('mouseup', () => paint = false)

  document.addEventListener('mousemove', e => {
    if (!paint)
      return

    ctx.beginPath()

    ctx.lineWidth = 5
    ctx.lineCap = 'square'
    ctx.strokeStyle = 'green'

    ctx.moveTo(x, y)
    getPosition(e)
    ctx.lineTo(x, y)

    ctx.stroke()
  })

  document.addEventListener('click', e => {
    getPosition(e)

    ctx.fillStyle = 'green'
    ctx.fillRect(x, y, 5, 5)
  })
}

