console.log('Loaded!');

var element = document.getElementById("main-text");

element.innerHTML = "Hi...This is Pavan";

var img = document.getElementById("madi");

var marginLeft = 0;
function moveRight() {
    moveLeft= moveLeft + 10;
    img.sytle.marginLeft = marginLeft;  
}
img.onclick = function() {
       var intervel = setIntervel(moveRight, 100);
};