var img=document.querySelector('.img1');
var heart=document.querySelector('.ri-heart-line');

img.addEventListener('click', function () {

    heart.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';

    setTimeout(function(){
        heart.style.transform = 'translate(-50%, -50%) scale(0) rotate(360deg)';
    }, 600);

});