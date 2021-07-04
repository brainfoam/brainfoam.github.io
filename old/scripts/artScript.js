"use strict";

/////////////////////////////
//Site made by Joe Aquiare.//
/////////////////////////////

let art_canvas;
let art_ctx;

let com_canvas;
let com_ctx;

init();

//The window onload function call.
function init() {
    art_canvas = document.querySelector("#artCanvas");
    art_ctx = art_canvas.getContext("2d");
    com_canvas = document.querySelector("#commissionCanvas");
    com_ctx = com_canvas.getContext("2d");

    let modal = document.querySelector("#artModal");
    let images = document.querySelectorAll("#art");
    let modalImg = document.querySelector("#img01");
    let captionText = document.querySelector("#caption");

    for(let i=0;i<images.length;i++) {
        images[i].onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.getAttribute("link");
            captionText.innerHTML = this.getAttribute("value");
        }
    }

    let span = document.querySelectorAll(".close")[0];
    
    span.onclick = modal.onclick = function() {
        modal.style.display = "none";
        modalImg.src = "images/load.png";
    }

    window.requestAnimationFrame(art_canvasLoop);
}

//The running gameloop for the art_canvas.
function art_canvasLoop() {
    art_ctx.fillStyle = 'white';
    art_ctx.fillRect(0,0,art_canvas.width, art_canvas.height);
    art_ctx.font = "30px Concert One";
    let text_x = 235;
    let text_y = 40;
    drawWigglyText(art_ctx, "Examples!!!", text_x, text_y, -1, 1.6, .06, .05, .02, 'rgb(30,30,30)');
    
    com_ctx.fillStyle = 'white';
    com_ctx.fillRect(0,0,com_canvas.width, com_canvas.height);
    com_ctx.font = "30px Concert One";
    text_x = 110;
    text_y = 40;
    drawWigglyText(com_ctx, "Commissions!!!", text_x, text_y, -1, 1.6, .09, .06, .04, 'rgb(30,30,30)');
    com_ctx.font = "15px Concert One";
    text_x = 176;
    text_y = 70;
    drawWigglyText(com_ctx, "OPEN", text_x, text_y, 3, 1.6, .06, .1, .05, '#00cc00');
    
    window.requestAnimationFrame(art_canvasLoop);
}