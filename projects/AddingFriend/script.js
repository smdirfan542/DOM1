var add=document.querySelector('.add');
var del=document.querySelector('.rem');
var btns=document.querySelector('.btn');
var check=0;

var stat=document.querySelector('.status');

btns.addEventListener('click',function(){
    if(check==0){
        stat.innerHTML='Friends';
        add.style.opacity='0';
        del.style.opacity='1';
        check=1;
    }else{
        stat.innerHTML='Strange';
        add.style.opacity='1';
        del.style.opacity='0';
        check=0;
        
    }
})