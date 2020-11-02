var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var paddle = {
    width: 100,
    height: 20,
    x: 20,
    y: canvas.height - 10,
    speed: 15,
    drawPaddle: function () {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = "blue";
        context.fill();
        context.closePath();
    },

    moveLeft: function () {
        this.x -= this.speed;
    },

    moveRight: function () {
        this.x += this.speed;
    },

    clear: function () {
        console.log(1)
        context.clearRect(this.x, this.y, this.width, this.height)
    },

    move: function (keyCode) {
        if(this.x < 0){
            this.x = 0;
        }else if(this.x+this.width > canvas.width){
            this.x = canvas.width - this.width;
        }
        console.log(this.x);
        context.clearRect(this.x, this.y, this.width, this.height)
        switch (keyCode){
            case 39:
                this.moveRight();
                break;
            case 37:
                this.moveLeft();
                break;
        }

        this.drawPaddle();
    }
};





