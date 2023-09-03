const img = document.getElementById("cookie");
const counter =document.getElementById("clicker__counter")
const rate = document.getElementById("clicker__rate")

const originWidth = img.width
const originHeight = img.height

const startClickTime = new Date().getTime()
let lastClickTime = startClickTime;

img.onclick = () => {
    const currentTime = new Date().getTime()

    counter.textContent = (Number(counter.textContent) + 1).toString()
    rate.textContent = (1000 / (currentTime - lastClickTime)).toFixed(2)

    // img.style.transform = "scale(1.2)"
    img.width = originWidth * 1.2
    img.height = originHeight * 1.2

    setTimeout(() => {
        // img.style.transform = "scale(1)"
        img.width = originWidth
        img.height = originHeight

    }, 100)

    lastClickTime = currentTime
}



