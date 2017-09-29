window.onload = function()
{
const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

const x = 0
const y = 0

const car = new Image()
car.src="images/kimi_2.png"
car.addEventListener('load', function() {
context.drawImage(car, x, y)
}, false);

}
