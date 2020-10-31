var canvas=document.getElementById("canvas");
var context=canvas.getContext("2d");
var ball= {
    x: 40,//tam ball
    y: 20,//tam ball
    dx: 5,//gia toc ball
    dy: 10,//gia toc ball
    radius: 20,//ban kinh ball
    drawball: function () {          //ve ball
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = "red";
        context.fill();
        context.closePath();
    },
    move: function (){         //di chuyen ball
       context.clearRect(0,0,canvas.width,canvas.height);
       ball.drawball();
       paddle.drawPaddle();
       bricks.drawbricks();
       if(ball.x<ball.radius || ball.x>canvas.width-ball.radius){  //xu ly khi ball va cham vao duong bien
           ball.dx=-ball.dx;
       }
       if(ball.y<ball.radius || ball.y>canvas.height-ball.radius){  //xu ly khi ball va cham vao duong bien
            ball.dy=-ball.dy;
        }
       ball.x+=ball.dx;
       ball.y+=ball.dy;
       requestAnimationFrame(ball.move);
        if ((paddle.y - ball.y) === ball.radius && paddle.x <= ball.x && ball.x <= paddle.x + paddle.width) {
            console.log(10);
        }
    }
}















// ball.drawball();
// setInterval(function (){
//   context.clearRect(0,0,canvas.width,canvas.height);
//   ball.drawball();
//   ball.x+=2;
//   ball.y+=2;
//
//
// },10);






