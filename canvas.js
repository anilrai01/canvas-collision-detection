var canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var ctx = canvas.getContext('2d');

var mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2,
}

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
});

addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;

    // event.clientX = mouse.x;
    // event.clientY = mouse.y;
});

function Circle(x,y,rad,color){
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.color = color;

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
    }

    this.update = function(){

    }
}

function getDistance(x1, y1, x2, y2){
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

var circle1, circle2;
function init(){
    circle1 = new Circle(canvas.width / 2,canvas.height / 2 ,100, 'black');
    circle2 = new Circle(undefined,undefined, 30, 'red');
}

init();

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height);

    circle1.draw();
    circle2.x = mouse.x;
    circle2.y = mouse.y;
    circle2.draw();

    let dist = getDistance(circle1.x , circle1.y, circle2.x, circle2.y );
    // console.log(getDistance(circle1.x , circle1.y, circle2.x, circle2.y ));

    if(dist < circle1.rad + circle2.rad){
        circle2.color = 'Blue';
    }else{
        circle2.color = 'Red';
    }
    // console.log(getDistance(circle1.x , circle1.y, circle2.x, circle2.y ));
}

animate();