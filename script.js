var main=document.querySelector('.main');
var btn=document.querySelector('#btn');
btn.addEventListener('click',function(){
    var h=document.createElement('h1');
    h.style.color='white';
    var x=Math.random()*80;
    var y=Math.random()*80;
    var deg=Math.random()*360;
    var scal=Math.floor(Math.random()*3);
    var headings=['iam irfan','iam smd','doing sce','iam sde bca','mca'];
    var a=Math.floor(Math.random()*headings.length);
    h.innerHTML=headings[a];
    h.style.fontSize='40px'
    h.style.textWrap='unwrap'
    h.style.left=x+'%';
    h.style.top=y+'%';
    h.style.rotate=deg+'deg'
    h.style.scale=scal>0?scal:1;
    h.style.position='absolute';
    main.appendChild(h);
})