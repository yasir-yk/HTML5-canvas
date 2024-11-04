var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle ="rgba(255,0,0,0.5)"
// c.fillRect(100, 100, 100, 100);
// c.fillStyle ="rgba(0,0,255,0.5)"
// c.fillRect(200, 200, 100, 100);
// c.fillStyle ="rgba(0,255,0,0.5)"
// c.fillRect(300, 300, 100, 100);

//Line
// c.beginPath();
// c.moveTo(100, 50);
// c.lineTo(150, 50);
// c.lineTo(150, 100);
// c.lineTo(100, 100);
// c.lineTo(100, 50);
// c.strokeStyle = "#0000ff"
// c.stroke();


//Arc /Circle
//startAngle:Float

// c.beginPath();
// c.arc(430, 370, 30, 0, Math.PI*2 , false);
// c.strokeStyle = 'red'
// c.stroke();

function Circle(x, y, dx, dy, radius){
 this.x = x;
 this.y = y;

 this.dx = dx;
 this.dy = dy;

 this.radius = radius;

 this.color = getRandomColor();

 function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
 this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2 , false);
    c.strokeStyle = this.color;
    c.stroke();
    // c.fillStyle = this.color;
    // c.fill();
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
        this.draw();
    }
}

var circle = new Circle(200, 100, 3, 30);


var circleArray = [];

for (var i = 0; i < 100 ; i++) {
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    
    circleArray.push(new Circle(x, y, dx, dy, radius));
    //var circle = new Circle(x, y, dx, dy, radius); 
}
console.log(circleArray);
animate();

// var y = Math.random() * innerHeight;
// var dy = Math.random() - 0.5 * 8;
// var x = Math.random() * innerWidth;
// var dx = Math.random() - 0.5 * 8;
// var radius = 30;
function animate () {
    requestAnimationFrame(animate);
    c.clearRect(0 ,0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
        
    }
    // c.beginPath();
    // c.arc(x, y, radius, 0, Math.PI*2 , false);
    // c.strokeStyle = 'red'
    // c.stroke();

    // if(x + radius > innerWidth || x - radius < 0){
    //     dx = -dx;
    // }
    // if(y + radius > innerHeight || y - radius < 0){
    //     dy = -dy;
    // }
    // x += dx;
    // y += dy;
}


//Arc /Circle In loop
// for (var i = 0; i < 100; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI*2 , false);
//     c.strokeStyle = "yellow"
//     c.stroke();
// }

console.log(canvas);