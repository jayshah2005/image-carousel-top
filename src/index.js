import './style.css';
import setup1 from './assests/setup-1.jpg'
import setup2 from './assests/setup-2.jpg'

const frame = document.querySelector(".picture-frame")
const imgs = [setup1, setup2]

imgs.forEach((src) => {
    const imgDiv = document.createElement('div')
    imgDiv.className = 'imgDiv'
    const img = document.createElement('img')
    img.src = src;
    img.className = 'img'
    imgDiv.append(img)
    frame.append(imgDiv)
})

console.log("It works!")