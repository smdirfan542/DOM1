var h=document.querySelector('.helem');
// h.addEventListener('click',function(){
//     h.innerHTML="irfan"
//     h.style.color='yellow'
//     h.style.backgroundColor='black'
//     h.style.width='fit-content'
// })

h.addEventListener('click',function(){
    var a=Math.random()*10;
    
    h.innerHTML="Random:-"+a+"  Floor:-"+Math.floor(a);
})

var box=document.querySelector('#container1');
var btn=document.querySelector('#btn');
btn.addEventListener('click',function(){
    
        var c1=Math.floor(Math.random()*245);
        var c2=Math.floor(Math.random()*245);
        var c3=Math.floor(Math.random()*245);
        //array one
        var arr=['irfan','zahid','rehan','faizan','sayed'];
        var ct=Math.floor(Math.random()*arr.length);
         box.innerHTML=arr[ct]+" "+arr[ct+1];
        box.style.backgroundColor=`rgb(${c1},${c2},${c3})`;
})

var teams=[
    {
        team:"csk",
        Color:"yellow",
        secColor:"gold"
    },{
        team:"rcb",
        Color:"black",
        secColor:"red"
    }
    ,{
        team:"srh",
        Color:"orange",
        secColor:"black"
    }
    ,{
        team:"mi",
        Color:"blue",
        secColor:"gold"
    }
    ,{
        team:"kX11",
        Color:"crimson",
        secColor:"black"
    }
]
var iplh=document.querySelector('#iplh');
var iplbtn=document.querySelector('#iplbtn');
var iplground=document.querySelector('.main');
var iplsecground=document.querySelector('.second');
iplbtn.addEventListener('click',function(){
    // iplh.innerHTML=teams[Math.floor(Math.random()*10)].team;
    var a=Math.floor(Math.random()*teams.length);
    var team=teams[a];
    iplh.innerHTML=team.team;
    iplh.style.color='white'
    iplground.style.backgroundColor=team.Color;
    iplsecground.style.backgroundColor=team.secColor;
})

