function changeColor(color){
    document.body.style.background = color;

}
web 
function myFunc(){
    var colors = ['red', 'green', 'blue', 'yellow', 'orange'];
    var randomIndex = Math.floor(Math.random() * colors.length);
    var randomColor = colors[randomIndex];
    changeColor(randomColor);
}