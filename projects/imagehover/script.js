var elems=document.querySelectorAll('.elem');
elems.forEach(function(e){
    var img=e.querySelector('img');
    e.addEventListener('mousemove',function(){
        img.style.opacity='1';
    })
    e.addEventListener('mouseleave',function(){
        img.style.opacity='0';
    })
})