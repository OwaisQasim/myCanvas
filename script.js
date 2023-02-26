const canvas = document.getElementById('canvas')
const decreaseBtn = document.getElementById('decrease')
const sizeBtn = document.getElementById('size')
const increaseBtn = document.getElementById('increase')
const eraseBtn = document.getElementById('clear')
const ctx = canvas.getContext('2d')
const colorEl = document.getElementById('color')

let size = 10
let color = 'black'
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

function updateSizeOnScreen() {
    sizeBtn.innerHTML = size
}

colorEl.addEventListener('change', (e) => color = e.target.value)
eraseBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
increaseBtn.addEventListener('click', () => {
    size += 5
    if (size > 30) {
        size = 30
    }
    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5
    if (size < 5) {
        size = 5
    }
    updateSizeOnScreen()
})

