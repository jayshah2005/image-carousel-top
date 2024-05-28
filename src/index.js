import "./style.css";
import setup1 from "./assests/setup-1.jpg";
import setup2 from "./assests/setup-2.jpg";
import setup3 from "./assests/setup-3.jpeg";

// Just add the image to this array to add it to the carousel.
const imgs = [setup1, setup2, setup3];

const frame = document.querySelector(".picture-frame");
var currImage = document.querySelector(":root");

const displacement = 2 * imgs.length + "px";
const container = document.createElement("div");
container.className = "container";
container.style.left = "calc(50% - " + displacement + ")";

frame.append(container);

imgs.forEach((src) => {
	const imgDiv = document.createElement("div");
	imgDiv.className = "imgDiv";
	imgDiv.style.right = "0px";
	const img = document.createElement("img");
	img.src = src;
	img.className = "img";
	imgDiv.append(img);
	frame.append(imgDiv);

	const imageKey = document.createElement("div");
	imageKey.className = "imageKey";
	container.appendChild(imageKey);

	imageKey.addEventListener('click', (event) => {
        const imgNumber = imgs.findIndex(elem => elem === src)
        currImage.style.setProperty("--currImage", imgNumber)
    });
});

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const imgDiv = Array.from(document.querySelectorAll(".imgDiv"));

left.addEventListener("click", (event) => {
	const root = document.querySelector(":root");

	if ((getComputedStyle(root).getPropertyValue("--currImage") | 0) > 0) {
		root.style.setProperty(
			"--currImage",
			(getComputedStyle(root).getPropertyValue("--currImage") | 0) - 1
		);
		imgDiv.forEach((div) => {
			div.style.right = "calc( (100%)*var(--currImage) )";
		});
	}
});

right.addEventListener("click", (event) => {
	const root = document.querySelector(":root");

	if (
		(getComputedStyle(root).getPropertyValue("--currImage") | 0) <
		imgs.length - 1
	) {
		root.style.setProperty(
			"--currImage",
			(getComputedStyle(root).getPropertyValue("--currImage") | 0) + 1
		);
		imgDiv.forEach((div) => {
			div.style.right = "calc( (100%)*var(--currImage) )";
		});
	}
});

let intervalID = setInterval(() => {
    const root = document.querySelector(":root")
    const currImage = ((getComputedStyle(root).getPropertyValue("--currImage") | 0) + 1) % imgs.length

    root.style.setProperty("--currImage", currImage)

    imgDiv.forEach((div) => {
        div.style.right = "calc( (100%)*var(--currImage) )";
    })
}, 5000)

console.log("It works!");
