window.onload = function()
{
  x = 100
  y = 50
  speed = 5
  angle = 0
  mod = 0

  canvas = document.getElementById("canvas")
  context = canvas.getContext("2d")

  car = new Image()
  car.src="images/kimi_2.png"
  car.addEventListener('load', function() {
    context.drawImage( car, x, y) }, false)

  window.addEventListener("keydown", keypress_handler, false)
  window.addEventListener("keyup", keyup_handler, false)

  var moveInterval = setInterval(function() { draw() }, 30)
}

function draw() {
  context = canvas.getContext("2d")
  context.clearRect(0, 0, 1300 , 1300 )

  x += (speed*mod) * Math.cos(Math.PI/180 * angle)
  y += (speed*mod) * Math.sin(Math.PI/180 * angle)

  context.save()
  context.translate(x, y)
  context.rotate(Math.PI/180 * angle)
  context.drawImage(car, -(car.width/2), -(car.height/2))
  context.restore()
}

function keyup_handler(event) {
  if(event.keyCode == 87 || event.keyCode == 83) {
    mod = 0
  }
}

function keypress_handler(event) {
  console.log(event.keyCode)
  // up
  if(event.keyCode == 38) {
    mod = 1
  }
  // down
  if(event.keyCode == 40) {
    mod = -1
  }
  // left
  if(event.keyCode == 37) {
    angle -= 5
  }
  // right
  if(event.keyCode == 39) {
    angle += 5
  }
}
