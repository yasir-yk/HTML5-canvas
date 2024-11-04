var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}
var maxRadius = 40;
var minRadius = 5;


window.addEventListener('mousemove', 
    function(event){
        mouse.x = event.x;
        mouse.y = event.y;
        // console.log('x' + event.x);
        // console.log('y' + event.y);
        console.log(mouse);
});

var colorArray = [
    '#0000ff',
    '#00ff00',
    '#ff0000',
    'yellow',
    'lightblue',
]

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function Circle(x, y, dx, dy, radius){
 this.x = x;
 this.y = y;
 this.dx = dx;
 this.dy = dy;
 this.radius = radius;
 this.color = getRandomColor();
 this.colors = colorArray[Math.floor(Math.random() * colorArray.length)];
 
 this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2 , false);
    //c.strokeStyle = this.color;
    c.strokeStyle = this.color;
    c.stroke();
    c.fillStyle = this.color;
    c.fill();
    if (this.fillStyle) {
        c.fillStyle = this.fillStyle;
        c.fill();
    }
}
    this.update = function() {
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        //interativity
        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 
            && mouse.y - this.y < 50 && mouse.y - this.y > -50){
                if (this.radius < maxRadius){
                    this.radius += 5;
                    this.fillStyle = this.color;
                    
                }
            
        } else if (this.radius > minRadius) {
           this.radius -= 5;
           this.fillStyle = null;
        }
        

        this.draw();
    }
}

var circle = new Circle(200, 100, 3, 30);


var circleArray = [];

for (var i = 0; i < 500 ; i++) {
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5)* 2;
    var dy = (Math.random() - 0.5)* 2;
    
    circleArray.push(new Circle(x, y, dx, dy, radius));
    //var circle = new Circle(x, y, dx, dy, radius); 
}
console.log(circleArray);
animate();


function animate () {
    requestAnimationFrame(animate);
    c.clearRect(0 , 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++ ) {
        circleArray[i].update();
        
    }
}




console.log(canvas);