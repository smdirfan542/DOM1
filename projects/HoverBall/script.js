var main=document.querySelector('.main');
var ball=document.querySelector('.ball');
main.addEventListener("mousemove",function(evt){
    ball.style.top=evt.y+"px"
    ball.style.bottom=evt.x+"px"
    ball.style.left=evt.x+"px"
    ball.style.right=evt.y+"px"
})
document.addEventListener('click',function(){
    setTimeout(function(){
        ball.style.backgroundColor='red';
    },275);
    ball.style.backgroundColor='blue';
})