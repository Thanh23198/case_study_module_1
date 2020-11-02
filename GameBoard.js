class GameBoard {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.gtx = document.getElementById("canvas").getContext('2d');
    }

    play() {
        paddle.drawPaddle();
        ball.move();

    }

    // BalltouchCrossbar(ball,paddle){
    //     alert(1)
    //     if ((paddle.y - ball.y) === ball.radius && paddle.x <= ball.x && ball.x <= paddle.x + paddle.width) {
    //        ball.move() ;
    // }
    //
    // }


};

//check va cham giua 2 doi tuong


var gameBoard = new GameBoard();
gameBoard.play();
window.addEventListener('keyup', function (event) {
    paddle.move(event.keyCode)
});
window.addEventListener('keypress', function (event) {
    paddle.move(event.keyCode)
});
window.addEventListener('keydown', function (event) {
    paddle.move(event.keyCode)
});



