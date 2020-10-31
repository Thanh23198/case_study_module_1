var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var bricks={
    x:25,
    y:30,
    width:70,
    height:25,
    // rows:3,
    // cols:5,
    drawbricks:function (){
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = "green";
        context.fill();
        context.closePath();
        context.beginPath();
        context.rect(this.x + 100, this.y, this.width, this.height);
        context.fillStyle = "green";
        context.fill();
        context.closePath();
        context.beginPath();
        context.rect(this.x + 200, this.y, this.width, this.height);
        context.fillStyle = "green";
        context.fill();
        context.closePath();
        context.beginPath();
        context.rect(this.x + 300, this.y, this.width, this.height);
        context.fillStyle = "green";
        context.fill();
        context.closePath();
        context.rect(this.x,this.y+40,this.width,this.height);
        context.fillStyle = "green";
        context.fill();
        context.closePath();
        context.beginPath();
        context.rect(this.x+100,this.y+40,this.width,this.height);
        context.fillStyle = "green";
        context.fill();
        context.closePath();
        context.rect(this.x+200,this.y+40,this.width,this.height);
        context.fillStyle = "green";
        context.fill();
        context.closePath();
        context.beginPath();
        context.rect(this.x+300,this.y+40,this.width,this.height);
        context.fill();
        context.closePath();
            }
        };
bricks.drawbricks();