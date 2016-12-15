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
		//산타
// Santa
const tl = new TimelineMax({
	repeat: -1
})

const svg = document.querySelector('svg')

const scene1 = {
	wrapper: svg.querySelector('.scene1'),
	arm: svg.querySelector('#arm_3_'),
	face: svg.querySelector('.face'),
	bag: svg.querySelector('#bag_1_'),
	body: svg.querySelector('.body'),
	deerHead: svg.querySelector('#head_1_'),
	armLeft: svg.querySelector('#arm_4_'),
	armRight: svg.querySelector('#arm2_1_'),
	deerBody: svg.querySelector('#body_2_')
}

// Deer
tl.from(scene1.deerHead, 0.75, {
	rotation: '+=5deg',
	transformOrigin: '80% 50%',
	repeat: 1,
	repeatDelay: 0.25,
	yoyo: true,
	ease: Linear.easeNone
}, 0)

tl.from(scene1.deerHead, 0.5, {
	x: '-=2',
	y: '+=2',
	transformOrigin: '80% 40%',
	repeat: 3,
	yoyo: true,
	ease: Linear.easeNone
}, 0)

tl.from(scene1.armLeft, 1, {
	rotation: '+=15deg',
	transformOrigin: '100% 80%',
	repeat: 1,
	yoyo: true,
	ease: Linear.easeNone
}, 0)

tl.from(scene1.armRight, 1, {
	rotation: '-=10deg',
	transformOrigin: '100% 80%',
	repeat: 1,
	yoyo: true,
	ease: Linear.easeNone
}, 0)

tl.from(scene1.deerBody, 1, {
	y: '+=5',
	rotation: '-=5',
	transformOrigin: '40% 80%',
	repeat: 1,
	yoyo: true,
	ease: Linear.easeNone
}, 0)

// Santa
tl.from(scene1.arm, 1, {
	rotation: '+=10deg',
	transformOrigin: '80% 40%',
	repeat: 1,
	yoyo: true,
	ease: Linear.easeNone
}, 0)

tl.from(scene1.face, 1, {
	rotation: '+=5deg',
	transformOrigin: '80% 40%',
	repeat: 1,
	yoyo: true,
	ease: Linear.easeNone
}, 0.2)

tl.from(scene1.face, 0.5, {
	x: '+=10',
	transformOrigin: '80% 40%',
	repeat: 3,
	yoyo: true,
	ease: Linear.easeNone
}, 0.2)

tl.from(scene1.bag, 1, {
	rotation: '-=2deg',
	transformOrigin: '30% 0%',
	repeat: 1,
	yoyo: true,
	ease: Linear.easeNone
}, 0.2)

tl.from(scene1.body, 0.5, {
	y: '+=3',
	transformOrigin: '30% 0%',
	repeat: 3,
	yoyo: true,
	ease: Linear.easeNone
}, 0.2)

tl.timeScale(1.55);