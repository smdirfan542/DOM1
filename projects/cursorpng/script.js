var cursor=document.querySelector('#cursor');
var main=document.querySelector('.main');
main.addEventListener('mousemove',function(e){
    cursor.style.left=e.x+'px';
    cursor.style.top=e.y+'px';
})