$(document).ready(function() {
    var canvas = $("#myCanvas");
    var context = canvas.get(0).getContext("2d");
    context.fillStyle = "#0000ff";


    var canvasWidth = canvas.width();
    var canvasHeight = canvas.height();

    var stopButton = $("#stop");
    var beginButton = $("#begin");
    stopButton.click(function() {
        clearInterval(timer);
    });

    beginButton.click(function () {
        timer = setInterval(function () {
            snake.move();
            paintSnake();

        }, 500);
    });

    var timer;

    var score;


    var snake = {
        long : 5,
        direction :"right",
        head: {x:0,y:0},
        location: new Array(),//位置，是个数组
        //var isplay;


        move: function () {
            console.log(this.head);

            this.location.push({
                x:this.head.x,y:this.head.y
            });

            if (this.direction === "left") {
                this.head.x -= 1;
            } else if (this.direction === "right") {
                this.head.x += 1;
            } else if (this.direction === "top") {
                this.head.y -= 1;
            } else if (this.direction === "bottom") {
                this.head.y += 1;
            }
            if (this.location.length > this.long+1)
                this.location.shift();

            console.log(this.location);
        }

    };
    function startGame() {
        timer = setInterval(function() {
            snake.move();
            paintSnake();

        }, 2000);
    }

    function paintSnake() {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        snake.location.forEach(function(item,index) {
            if (index < snake.location.length-1) {
                //console.log(item.x + ":"+item.y);
                context.strokeStyle = "red";
                context.beginPath();
                console.log((snake.location[index + 1].x+":"+ snake.location[index + 1].y));
                //context.arc(100, 100, 99, 0, 2 * Math.PI, false);


                context.lineTo(snake.location[index + 1].x, snake.location[index + 1].y);
               
                context.closePath();
            }
        });
    }
//
//    $(window).KEYDOWN(function(e) {
//        
//    });

    document.onkeydown = function() {
        console.log(event.keyCode);
        var keycode = event.keyCode;
        if (keycode===37) {
            snake.direction = "left";
        } else if (keycode === 38) {
            snake.direction = "top";
        } else if (keycode === 39) {
            snake.direction = "right";
        } else if (keycode === 40) {
            snake.direction = "bottom";
        }
    };

    startGame();

    function BSkeyDown(e) {
        if (document.all) {

            var ieKey = event.keyCode;
            // alert(ieKey);
            if (event.ctrlKey && event.altKey && event.shiftKey && ieKey == 90) {
                alert("显示");
                //-------------------------------
                // Ctrl + Alt + Shift ＋ otherKey
                // 此处设置Ctrl,Alt,Shift三个键一起按下后的快捷处理。
                //-------------------------------
                switch (ieKey) {
                }
                //-------------------------------
            } else if (event.ctrlKey && event.altKey) {
                //-------------------------------
                // Ctrl + Alt ＋ otherKey
                // 此处设置Ctrl,Alt两个键一起按下后的快捷处理。
                //-------------------------------
                switch (ieKey) {
                }
                //-------------------------------
            } else if (event.ctrlKey) {
                //-------------------------------
                // Ctrl + otherKey
                // 此处设置Ctrl键加其它键的快捷处理。
                //-------------------------------

                //-------------------------------
            } else if (event.altKey) {
                //-------------------------------
                // Alt + otherKey
                // 此处设置Alt键加其它键的快捷处理。
                //-------------------------------

                //-------------------------------
            } else if (event.shiftKey) {
                //-------------------------------
                // Shift + otherKey
                // 此处设置Shift键加其它键的快捷处理。
                //-------------------------------

                //-------------------------------
            } else {
                //-------------------------------
                // 此处设置按单个键的快捷处理。
                //-------------------------------

                //-------------------------------
            }
        }
    }
})