"use strict";

/////////////////////////////
//Site made by Joe Aquiare.//
/////////////////////////////

let about_canvas;
let about_ctx;
let skills_canvas;
let skills_ctx;

init();

//The window onload function call.
function init() {
    about_canvas = document.querySelector("#aboutCanvas");
    about_ctx = about_canvas.getContext("2d");
    
    skills_canvas = document.querySelector("#skillsCanvas");
    skills_ctx = skills_canvas.getContext("2d");

    let modal = document.querySelector("#selfieModal");
    let img = document.querySelector("#selfie");
    let modalImg = document.querySelector("#img01");
    let captionText = document.querySelector("#caption");
    
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    
    let span = document.querySelectorAll(".close")[0];
    
    span.onclick = function() {
        modal.style.display = "none";
        modalImg.src = "";
    }

    window.requestAnimationFrame(about_canvasLoop);
}

//The running gameloop for the art_canvas.
function about_canvasLoop() {
    about_ctx.fillStyle = 'white';
    about_ctx.fillRect(0,0,about_canvas.width,about_canvas.height);
    
    skills_ctx.fillStyle = 'white';
    skills_ctx.fillRect(0,0,skills_canvas.width,skills_canvas.height);
    
    about_ctx.font = "30px Concert One";
    let text_x = 170;
    let text_y = 15;
    drawWigglyText(about_ctx, "Who am I???", text_x, text_y, -1, 3, .07, .1, .035, 'rgb(30,30,30)');
    
    if(!isMobile()) {
        about_ctx.font = "12px Concert One";
        text_x = 65;
        text_y = 41;
        drawWigglyText(about_ctx, "THIS", text_x, text_y, 0, .7, .07, .1, .035, 'rgb(150,150,150)');
    
        about_ctx.font = "12px Concert One";
        text_x = 30;
        text_y = 40;
        drawWigglyText(about_ctx, "Who's THIS fella??", text_x, text_y, 0, .7, .07, .1, .035, 'rgb(200,200,200)');
    }

    skills_ctx.font = "30px Concert One";
    text_x = 130;
    text_y = 30;
    text_y = 30;
    drawWigglyText(skills_ctx, "Things I Know...", text_x, text_y, 2, 3, .07, .1, .035, 'rgb(30,30,30)');
    
    window.requestAnimationFrame(about_canvasLoop);
}