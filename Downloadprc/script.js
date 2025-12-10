var inner=document.querySelector('.inner');
var btn=document.querySelector('.btn');
var h1=document.querySelector('h1');
btn.addEventListener('click',function(){
    var a=0;
    var b=0;
    var prc=setInterval(function(){
        h1.innerHTML=a+++"%";
        inner.style.width=`${(b++)+"%"}`;
    },99);
    setTimeout(function(){
        clearInterval(prc);
        btn.style.opacity=0.4;
    },10000);
})