const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let size = 10
color = 'red'
let isPressed = false
let x
let y

canvas.addEventListener('mousedown', e => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
    drawCircle(x, y)
})

canvas.addEventListener('mouseup', () => {
    isPressed = false
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', e => {
    if (isPressed) {
        const x1 = e.offsetX
        const y1 = e.offsetY
        drawCircle(x1, y1)
        drawLine(x, y, x1, y1)

        x = x1
        y = y1
    }
})

function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

