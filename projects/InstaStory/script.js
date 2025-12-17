var arr=[{dp:'https://images.unsplash.com/photo-1765912679250-cea903b4b917?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',story:'https://images.unsplash.com/photo-1765912679250-cea903b4b917?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D'},
{dp:'https://images.unsplash.com/photo-1765597118449-98a75f914590?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D',story:'https://images.unsplash.com/photo-1765597118449-98a75f914590?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D'},
{dp:'https://images.unsplash.com/photo-1765817431646-1d667deff9da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D',story:'https://images.unsplash.com/photo-1765597118449-98a75f914590?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D'},
{dp:'https://images.unsplash.com/photo-1761839257870-06874bda71b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',story:'https://images.unsplash.com/photo-1765597118449-98a75f914590?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D'},
{dp:'https://images.unsplash.com/photo-1761839257870-06874bda71b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',story:'https://images.unsplash.com/photo-1765597118449-98a75f914590?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D'}
]
var clutter='';
var storyref=document.querySelector('.storyreflect');
var main=document.querySelector('.main');
var storysection=document.querySelector('.storysection');

arr.forEach(function(obj,index){
    clutter+=`<div class="name">
                    <div class="story1" >
                        <img id=${index} src=${obj.dp} alt="">
                    </div>
              </div>`

            })
storysection.innerHTML+=clutter;
storysection.addEventListener('click',function(obj){
    
    storyref.innerHTML=`<img style="height:100%; border-radius:8px; padding:3px; width:100%; object-fit:cover;"src=${arr[obj.target.id].story}></img>`
    setTimeout(function(){
        storyref.style.display='none'
    },2000);
    storyref.style.display='block'
})

