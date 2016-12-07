/*
var balls = document.getElementsByClassName("ball");

var presents = document.getElementsByClassName("present");

for(var i=0; i<balls.length; i++)
{
  balls[i].addEventListener("mouseover",onMouseOverBall);
  balls[i].addEventListener("touchstart",onMouseOverBall);
};

for(var i=0; i<presents.length; i++)
{
  presents[i].addEventListener("mouseover",onMouseOverPresent);
  presents[i].addEventListener("click",onClickPresent);
};

function onMouseOverBall(e)
{
  if(!this.swinging)
  {
    var rect = this.getBoundingClientRect();
    if(e.clientX < (rect.left+this.clientWidth/2)) // This means mouse is left of ball
    {
      this.swinging = true;
      this.style.transform = "rotate(-45deg)";
      setTimeout(function(){swing(this,300-70)}.bind(this),300);
    } 
    else
    {
      this.swinging = true;
      swing(this,300);
    }
  }
}

function swing(ball,time)
{
  //console.log(ball);
  if(ball.style.transform == "rotate(45deg)")
  {
    ball.style.transform = "rotate(-45deg)";
  }
  else
  {
    ball.style.transform = "rotate(45deg)";
  }
  if(time>0)
  {
    setTimeout(function()
    {
      swing.call(this, ball,time-70);
    },time);
  }
  else 
  {
    ball.style.transform = ""; 
    ball.swinging = false;
  }
}

function onMouseOverPresent(e)
{
  if(!this.wiggling && !this.classList.contains("open"))
  {
    var rect = this.getBoundingClientRect();
    if(e.clientX < (rect.left+this.clientWidth/2)) // This means mouse is left of present
    {
      this.wiggling = true;
      this.style.transform = "rotate(45deg)";
      setTimeout(function(){wiggle(this,300-70,"left")}.bind(this),300);
    } 
    else
    {
      this.wiggling = true;
      wiggle(this,300,"right");
    }
  }
}

function onClickPresent()
{
  this.classList.add("open"); 
  unfold();
}

function wiggle(present,time,direction)
{
  if(direction == "left")
  {
    if(present.style.transform == "rotate(45deg)")
    {
      present.style.transform = "rotate(0deg)";
    }
    else
    {
      present.style.transform = "rotate(45deg)";
    }
  }
  else
  {
    if(present.style.transform == "rotate(-45deg)")
    {
      present.style.transform = "rotate(0deg)";
    }
    else
    {
      present.style.transform = "rotate(-45deg)";
    }
  }
  if(time>0)
  {
    setTimeout(function()
    {
      wiggle.call(this, present,time-70,(direction == "left")?"right":"left");
    },time);
  }
  else 
  {
    present.style.transform = ""; 
    present.wiggling = false;
  }
}

var letters = document.getElementsByClassName("letter");
function unfold()
{
  for(var i=0; i<letters.length; i++)
  {
    letters[i].style.top = "-75vh";
    letters[i].style.transform = "translateY("+i*5+"vh)";
  }
}


//SNOW EFFECT WITH KIND SUPPORT FROM 
//http://thecodeplayer.com/walkthrough/html5-canvas-snow-effect
window.onload = function(){
	//canvas init
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	//canvas dimensions
	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;
	
	//snowflake particles
	var mp = 125; //max particles
	var particles = [];
	for(var i = 0; i < mp; i++)
	{
		particles.push({
			x: Math.random()*W, //x-coordinate
			y: Math.random()*H, //y-coordinate
			r: Math.random()*4+1, //radius
			d: Math.random()*mp //density
		})
	}
	
	//Lets draw the flakes
	function draw()
	{
		ctx.clearRect(0, 0, W, H);
		
		ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
		ctx.beginPath();
		for(var i = 0; i < mp; i++)
		{
			var p = particles[i];
			ctx.moveTo(p.x, p.y);
			ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
		}
		ctx.fill();
		update();
	}
	
	//Function to move the snowflakes
	//angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
	var angle = 0;
	function update()
	{
		angle += 0.01;
		for(var i = 0; i < mp; i++)
		{
			var p = particles[i];
			//Updating X and Y coordinates
			//We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
			//Every particle has its own density which can be used to make the downward movement different for each flake
			//Lets make it more random by adding in the radius
			p.y += Math.cos(angle+p.d) + 1 + p.r/2;
			p.x += Math.sin(angle) * 2;
			
			//Sending flakes back from the top when it exits
			//Lets make it a bit more organic and let flakes enter from the left and right also.
			if(p.x > W+5 || p.x < -5 || p.y > H)
			{
				if(i%3 > 0) //66.67% of the flakes
				{
					particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
				}
				else
				{
					//If the flake is exitting from the right
					if(Math.sin(angle) > 0)
					{
						//Enter from the left
						particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
					}
					else
					{
						//Enter from the right
						particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
					}
				}
			}
		}
	}
	
	//animation loop
	setInterval(draw, 33);
}
*/

var makesantafly = function() {
  var santael = document.querySelector(".santa");
  var scrollY = window.pageYOffset;
  var viewportY = document.documentElement.clientHeight;
  var viewportX = document.documentElement.clientWidth;

  var startpos = {
    x: -400,
    y: rndom(scrollY, scrollY + viewportY)
  };
  var endpos = {
    x: viewportX,
    y: rndom(scrollY, scrollY + viewportY)
  };

  santael.classList.remove("hidden");

  var dx = endpos.x - startpos.x;
  var dy = endpos.y - startpos.y;
  var angle = Math.atan2(dy, dx);
  var magnitude = 4.0;
  var velX = Math.cos(angle) * magnitude;
  var velY = Math.sin(angle) * magnitude;

  var currentpos = startpos;
  var refreshIntervalId = setInterval(function() {
    currentpos.x = currentpos.x + velX;
    currentpos.y = currentpos.y + velY;
    santael.style.top = currentpos.y + "px";
    santael.style.left = currentpos.x + "px";

    if (currentpos.x > endpos.x) {
      clearInterval(refreshIntervalId);
      santael.classList.add("hidden");
    }
  }, 6);
};

var rndom = function(start, end) {
  return Math.floor(Math.random() * end) + start
};

cheet('s a n t a', makesantafly);

// https://jsfiddle.net/loktar/UdyN6/
(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
    window.requestAnimationFrame = requestAnimationFrame;
})();


var flakes = [],
    canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    flakeCount = 200,
    mX = -100,
    mY = -100

    canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function snow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < flakeCount; i++) {
        var flake = flakes[i],
            x = mX,
            y = mY,
            minDist = 150,
            x2 = flake.x,
            y2 = flake.y;

        var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
            dx = x2 - x,
            dy = y2 - y;

        if (dist < minDist) {
            var force = minDist / (dist * dist),
                xcomp = (x - x2) / dist,
                ycomp = (y - y2) / dist,
                deltaV = force / 2;

            flake.velX -= deltaV * xcomp;
            flake.velY -= deltaV * ycomp;

        } else {
            flake.velX *= .98;
            if (flake.velY <= flake.speed) {
                flake.velY = flake.speed
            }
            flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
        }

        ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
        flake.y += flake.velY;
        flake.x += flake.velX;
            
        if (flake.y >= canvas.height || flake.y <= 0) {
            reset(flake);
        }


        if (flake.x >= canvas.width || flake.x <= 0) {
            reset(flake);
        }

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fill();
    }
    requestAnimationFrame(snow);
};

function reset(flake) {
    flake.x = Math.floor(Math.random() * canvas.width);
    flake.y = 0;
    flake.size = (Math.random() * 3) + 2;
    flake.speed = (Math.random() * 1) + 0.5;
    flake.velY = flake.speed;
    flake.velX = 0;
    flake.opacity = (Math.random() * 0.5) + 0.3;
}

function init() {
    for (var i = 0; i < flakeCount; i++) {
        var x = Math.floor(Math.random() * canvas.width),
            y = Math.floor(Math.random() * canvas.height),
            size = (Math.random() * 3) + 2,
            speed = (Math.random() * 1) + 0.5,
            opacity = (Math.random() * 0.5) + 0.3;

        flakes.push({
            speed: speed,
            velY: speed,
            velX: 0,
            x: x,
            y: y,
            size: size,
            stepSize: (Math.random()) / 30,
            step: 0,
            angle: 180,
            opacity: opacity
        });
    }

    snow();
};

canvas.addEventListener("mousemove", function(e) {
    mX = e.clientX,
    mY = e.clientY
});

init();