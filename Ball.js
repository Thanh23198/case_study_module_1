var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var ball = {
    x: 30,//tam ball
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
    move: function () {         //di chuyen ball
        context.clearRect(0, 0, canvas.width, canvas.height);
        ball.drawball();
        ball.x += ball.dx;
        ball.y += ball.dy;
        paddle.drawPaddle();
        bricks.drawbricks();
        if (ball.x < ball.radius || ball.x > canvas.width - ball.radius) {  //xu ly khi ball va cham vao duong bien
            ball.dx = -ball.dx;
        }
        if (ball.y < ball.radius || ball.y > canvas.height - ball.radius) {  //xu ly khi ball va cham vao duong bien
            ball.dy = -ball.dy;
        }
        // ball.x += ball.dx;
        // ball.y += ball.dy;

        if (ball.crash(ball, paddle)) {
            alert("Va cham");
        }
        requestAnimationFrame(ball.move);


    },
    crash: function (ball, paddle) {
        let left1 = ball.x - ball.radius/2;
        let right1 = ball.x + ball.radius/2;
        let top1 = ball.y - ball.radius/2;
        let bottom1 = ball.y + ball.radius/2;
        let left2 = paddle.x;
        let right2 = paddle.x + paddle.width;
        let top2 = paddle.y;
        let bottom2 = paddle.y + paddle.height;
        if (right1 < left2 || bottom1 < top2 || left1 > right2 || top1 > bottom2) {
            return false;
        } else {
            return true;
        }
    }

}









