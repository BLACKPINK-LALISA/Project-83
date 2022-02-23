var a = document.getElementById("myCanvas");
var b = a.getContext("2d");
var c = "empty";
var last_x, last_y;
var colour ;
var thickness ;

function my_mouseDown() {
    thickness = document.getElementById("width").value;
    colour = document.getElementById("colour").value;
}

a.addEventListener("mouseup", up);
function up (e) {
c="mouseUp";
}
a.addEventListener("mouseleave", leave);
function leave (e) {
c="mouseleave";
}
a.addEventListener("mousedown", down);
function down (e) {
c="mouseDown";
}
a.addEventListener("mousemove", move);
function move (e) {
    var x=e.clientX - a.offsetLeft;
    var y=e.clientY - a.offsetTop;

    if (c == "mouseDown") {
        b.beginPath();
        b.strokeStyle=colour;
        b.lineWidth=thickness;

        console.log("x=" + last_x + "y=" +last_y);
b.moveTo(last_x, last_y);

console.log("x=" + x + "y=" +y);
b.lineTo(x,y);
b.stroke();
    }
    last_x = x;
    last_y = y;
}