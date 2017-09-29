window.onload = function()
{
x = 0;
y = 0;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

var moveInterval = setInterval(function()
{
draw()
}, 30)
}

function draw()
{
context.clearRect(0, 0, 1300, 1300)
const car = new Image()
car.src="images/kimi_2.png"
car.addEventListener('load', function() {
context.drawImage(car, x, y)
}, false);

y++;
}
