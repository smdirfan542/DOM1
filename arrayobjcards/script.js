const users=[
    {
        fullname:'irfan smd',
        age:'20',
        profession:'sfft devlper',
        tags:['ui','front','back'],
        roll:'1'
    },{
        fullname:'irfan smd',
        age:'20',
        profession:'sfft devlper',
        tags:['ui','front','back'],
        roll:'2'
    },{
        fullname:'irfan smd',
        age:'20',
        profession:'sfft devlper',
        tags:['ui','front','back'],
        roll:'3'
    },{
        fullname:'irfan smd',
        age:'20',
        profession:'sfft devlper',
        tags:['ui','front','back'],
        roll:'4'
    }
]


var url='https://jsonplaceholder.typicode.com/todos';
// console.log(users[0].roll);
// users.forEach(function(val,i){
//     console.log(val.roll+" "+i);
//     var random=Math.floor(Math.random()* 10);
//     console.log("random: "+random)

// })

var main=document.querySelector('.main');
users.forEach(function(elem){
 console.log("hi");
       main.innerHTML   += `<div class="card">
            <div class="details">
                <img class="image" src="https://images.unsplash.com/photo-1516041774595-cc1b7969480c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D" alt="">
                <h2 class="fullname">${elem.fullname}</h2>
                <h3 class="profession">${elem.profession}</h3>
                <p class="about">${elem.roll}</p>
            </div>

        </div>`

})
