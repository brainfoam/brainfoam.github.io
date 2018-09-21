"use strict";

/////////////////////////////
//Site made by Joe Aquiare.//
/////////////////////////////

let music_canvas;
let music_ctx;

init();

//The window onload function call.
function init() {
    music_canvas = document.querySelector("#musicCanvas");
    music_ctx = music_canvas.getContext("2d");
    window.requestAnimationFrame(music_canvasLoop);
}

//The running gameloop for the art_canvas.
function music_canvasLoop() {
    music_ctx.fillStyle = 'white';
    music_ctx.fillRect(0,0,music_canvas.width, music_canvas.height);
    music_ctx.font = "30px Concert One";
    let text_x = 110;
    let text_y = 40;
    drawWigglyText(music_ctx, "Commissions...", text_x, text_y, -1, 1.6, .09, .06, .04, 'rgb(30,30,30)');
    music_ctx.font = "15px Concert One";
    text_x = 170;
    text_y = 70;
    drawWigglyText(music_ctx, "OPEN??", text_x, text_y, 3, 1.6, .06, .1, .05, '#dddd00');
    window.requestAnimationFrame(music_canvasLoop);
}