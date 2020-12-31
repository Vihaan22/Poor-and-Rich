var canvas=document.getElementById("mycanvas")
var ctx=canvas.getContext("2d")
var color=document.getElementById("coin").value
var lastX,lastY,curX,curY
var mouseevent=""

canvas.addEventListener("mouseleave",ml)
function ml(e){
console.log("mouse left the canvas")
mouseevent="mouseleave"
}

canvas.addEventListener("mouseup",mp)
function mp(e){
   console.log("mouse has upped the canvas")
   mouseevent="mouseup"
}

canvas.addEventListener("mousedown",md)

function md(e){
    color=document.getElementById("coin").value
    lastX=e.clientX-canvas.offsetLeft
    lastY=e.clientY-canvas.offsetTop
mouseevent="mousedown"
console.log("intruder mouse has clicked the canvas")
}
canvas.addEventListener("mousemove",mm)
function mm(e){
    curX=e.clientX-canvas.offsetLeft
    curY=e.clientY-canvas.offsetTop
    if(mouseevent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=3
        ctx.moveTo(lastX,lastY)
        ctx.lineTo(curX,curY)
        ctx.stroke()
    }
    lastX=curX
    lastY=curY
}
if(screen.width<992){
    document.getElementById("mycanvas").width=screen.width-70
    document.getElementById("mycanvas").height=screen.height-200
    document.body.style.overflow="hidden"
}




canvas.addEventListener("touchstart",ts)

function ts(e){
    color=document.getElementById("coin").value
    lastX=e.touches[0].clientX-canvas.offsetLeft
    lastY=e.touches[0].clientY-canvas.offsetTop
console.log("Someone should keep their nosy fingers of this phone")
}
canvas.addEventListener("touchmove",tm)
function tm(e){
    curX=e.touches[0].clientX-canvas.offsetLeft
    curY=e.touches[0].clientY-canvas.offsetTop
    
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=3
        ctx.moveTo(lastX,lastY)
        ctx.lineTo(curX,curY)
        ctx.stroke()
    
    lastX=curX
    lastY=curY
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}