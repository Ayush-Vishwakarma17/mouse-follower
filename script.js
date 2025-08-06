const cursor = document.getElementById('cursor')
const cursorOutline = document.getElementById('cursor-outline')

window.addEventListener('mousemove' , (e) => {
    let posX = e.clientX
    let posY = e.clientY

    cursor.style.left = `${posX}px`
    cursor.style.top = `${posY}px`

    cursorOutline.style.left = `${posX}px`
    cursorOutline.style.top = `${posY}px`

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill: "forwards"})
})