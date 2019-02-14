"use strict";

/////////////////////////////
//Site made by Joe Aquiare.//
/////////////////////////////

let canvas;
let ctx;
let incr;
let pattern_image;
let pattern;
let pattern_x, pattern_y;
let ran;

////////////////////////
let eye_chance = 50; //  % eyes appearing
////////////////////////
let eye_x = 18;
let eye_y = 105;
let eye_sep = 35;
let eye_rad = 24;
let eye_freq = .04;
let eye_amp = 2;
let pupil_off = 11;
let eye_alpha = 0.0;
////////////////////////

window.onload = init;

//The window onload function call.
function init() {
    ran = Math.floor(Math.random() * 100);
    canvas = document.querySelector("#headerCanvas");
    ctx = canvas.getContext("2d");
    incr = 0;
    window.requestAnimationFrame(canvasLoop);
    pattern_x = 0;
    pattern_y = 0;
    pattern_image = document.querySelector("#pattern");
    pattern = ctx.createPattern(pattern_image, 'repeat');
}

//The running gameloop for the canvas header.
function canvasLoop() {
    incr++;
    if(incr > 9999999) {
        incr = 0;
    }
    drawBackgroundPattern(ctx);
    ctx.font = "45px Concert One";
    let text_x = 160;
    let text_y = 50;
    let text_shadow_dist = 2;
    drawWigglyText(ctx, "joeaquiare.com", text_x - text_shadow_dist, text_y + text_shadow_dist, -1, 2, .1, .1, .05, 'rgb(200,200,200)');
    drawWigglyText(ctx, "joeaquiare.com", text_x, text_y, -1, 2, .1, .1, .05, 'rgb(30,30,30)');
    ctx.font = "14px Concert One";
    let subtext_x = 170;
    let subtext_y = 89;
    drawWigglyText(ctx, "Game Design, Programming, Art, & Music", subtext_x, subtext_y, 0, .7, .1, .05, .05, 'rgb(70,70,70)');
    
    if(ran >= (100 - eye_chance)) {
        drawEyeballs(ctx);
    }

    window.requestAnimationFrame(canvasLoop);
}

function drawEyeballs(c) {

    if(eye_alpha < 1.0)
        eye_alpha += 0.1;
        
    ctx.globalAlpha = eye_alpha;

    //right eyeball
    drawCircle(c, eye_x + eye_sep, eye_y + eye_amp * Math.sin(incr * eye_freq), eye_rad, 'white', true, 3, 'black');   
    //right pupil
    drawCircle(c, eye_x + eye_sep + pupil_off, eye_y + (eye_amp * 1.5) * Math.sin(incr * eye_freq), eye_rad / 2.5, 'black');
    //left eyeball
    drawCircle(c, eye_x, eye_y + eye_amp * Math.sin(2 + incr * eye_freq), eye_rad, 'white', true, 3, 'black');
    //left pupil
    drawCircle(c, eye_x + pupil_off, eye_y + (eye_amp * 1.5) * Math.sin(.4 + incr * eye_freq), eye_rad / 2.5, 'black');

    ctx.globalAlpha = 1.0;
}

//Draws the looping background pattern behind the canvas.
function drawBackgroundPattern(c) {
    c.fillStyle = pattern;
    c.save();
    c.translate(pattern_x, pattern_y);
    c.fillRect(-500,-500,2000,2000);
    c.restore();
    pattern_x+=.4;
    pattern_y+=.4;
    if(pattern_x > 105) {
        pattern_x = 0;
        pattern_y = 0;
    }
}

//Draws wiggly text to the screen.
function drawWigglyText(c, s, x=100, y=100, sp=1, a=2, f=.1, ra=1, rf=.05, col='black') {
    c.save();
    c.textBaseline = 'middle';
    c.translate(x, y);
    for(let i = 0; i < s.length; i++) {
        let l = s.charAt(i);
        switch(col) {
            default:
                c.fillStyle = col;
            break;
        }
        let r = ra * Math.sin(i + rf * incr);
        c.rotate(r);
        c.fillText(l, 0, a * Math.sin(i + f * incr));
        c.rotate(-r);
        c.translate(c.measureText(l).width + sp, 0);
    }
    c.restore();
}

//draws a circle to the screen.
function drawCircle(c, x=0, y=0, r=20, col='black', s=false, lw=5, ss='gray') {
    c.save();
    c.fillStyle = col;
    c.beginPath();
    c.arc(x, y, r, 0, Math.PI * 2, false);
    c.closePath();
    ctx.fill();
    if(s) {
        c.strokeStyle = ss;
        c.lineWidth = lw;
        c.stroke();
    }
    c.restore();
}

function isMobile() {
    return window.innerWidth <= 700;
}