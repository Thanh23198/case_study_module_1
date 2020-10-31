var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var paddle = {
    width: 70,
    height: 10,
    x: 40,
    y: canvas.height - 10,
    speed: 35,
    drawPaddle: function () {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = "blue";
        context.fill();
        context.closePath();
    },

    moveLeft: function () {
        this.x -= 50;
    },

    moveRight: function () {
        this.x += 50;
    },

    clear: function () {
        console.log(1)
        context.clearRect(this.x, this.y, this.width, this.height)
    },

    move: function (keyCode) {
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





