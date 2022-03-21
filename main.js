var last_position_x , last_position_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "pink";
width_of_line = 5;

var width = screen.width
var new_width = screen.width - 70;
var new_height = screen.width - 300;

if(width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListner("touchstart" , my_touchstart);
function my_touchstart(e){
    console.log("my_touchstart")
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListner("touchmove" , my_touchmove);
function my_touchmove(e){
    console.log("my_touchmove");

    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.stokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("last position of x and y coordinates are - ");
    console.log("x = " + last_position_x + "y = " + last_position_y);
    ctx.moveTo(last_position_x , last_position_y);

    console.log("last position of x and y coordinates are - ");
    console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
    ctx.stroke();

    last_position_x = current_position_of_mouse_x,
    last_position_y = current_position_of_mouse_y;
}

function clear_drawing(){
    ctx.clearRect(0 , 0 , canvas.width , canvas.height);
}
