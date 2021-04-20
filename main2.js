
//HW 12.1 Due Monday
// x1.  Put the smiley face into a canvas
// x2a. Either On animation frame move the eyes up and down
// 2b. Or make the eyes change from circles to lines and then back to simulate blinking
// x3. Fill in the smiley face to be yellow

'use strict';


    let position = 0;
    let direction = 1;

 
const draw = () => {
    
    let canvas = document.getElementById('cv');
    let face=canvas.getContext("2d");
        face.moveTo(105,75);
        face.fillStyle="yellow";
        face.arc(150,150,150,0,Math.PI*2);
        face.stroke();
        face.fill();
    
    
    position += direction;
        if(position > canvas.width-100 || position < 0) {
            direction = -direction;
        }
    let eyes = canvas.getContext("2d");
        
        eyes.moveTo(55,50);
        eyes.beginPath();
        eyes.fillStyle="black";
        eyes.arc(100,position,8,0, Math.PI*2);
        eyes.closePath();
        eyes.fill();
    
    
        eyes.moveTo(103,49);
        eyes.beginPath();
        eyes.fillStyle="black";
        eyes.arc(200,position,8,0, Math.PI*2);
        eyes.closePath();
        eyes.fill();
    
     let smile = canvas.getContext("2d");
        smile.moveTo(105,75);
        smile.beginPath();
        smile.strokeStyle="black";
        smile.arc(150,150,60,0,Math.PI);
        smile.stroke();

    window.requestAnimationFrame(draw);
    }
document.addEventListener('DOMContentLoaded', () => {    
    window.requestAnimationFrame(draw);
});
