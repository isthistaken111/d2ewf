var mouseEvent="empty";
var lastx, lasty;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
widthofline=1;
canvas.addEventListener("mouseDown", mymousedown);

function mymousedown(e) {
color=document.getElementById("color").value ;
widthofline=document.getElementById("widthline").value ;
radius=document.getElementById("radius").value ;
mouseEvent="mouseDown";

}

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
currentx=e.clientX-canvas.offsetLeft;
currenty=e.clientY-canvas.offsetTop;
if(mouseEvent=="mouseDown") {
    ctx.beginPath(); 
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline;
    ctx.arc(currentx, curenty, radius, 0, 2*Math.PI);
    ctx.stroke();
}
}


canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) {
mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) {
mouseEvent="mouseleave";
}

function cleararea() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
}