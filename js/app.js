var body = document.querySelector('.body');

document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(() => {
         body.classList.add('loaded')
    },10)
})

var nav = document.querySelector('.nav');

/*-------------------NavBar active class -----------------------*/
var listItems = nav.querySelectorAll('li');
var totalList = listItems.length;

for(let i=0;i<totalList;i++){
    const a = listItems[i].querySelector('a');
    a.addEventListener('click',()=>{
        for(let j=0;j<totalList;j++){
            listItems[j].querySelector('a').classList.remove('active');
        }
        a.classList.add('active')
    })
}

/*---------------------NavBar Close-------------------------*/
var navbar_Btn = document.querySelector("#navBar_Btn");
var open_Btn = document.getElementById('open_Btn');
var color_Container = document.querySelector('.color_Container');
var aside_Container = document.querySelector('.main_Container');
var all_Containers = document.querySelector('.all_Containers');

var navOpen = false;
navbar_Btn.addEventListener('click',()=>{
    aside_Container.classList.toggle('open');
    if(navOpen == false){
        aside_Container.classList.add('open');
        navbar_Btn.innerHTML = `<i class="fa-solid fa-close"></i>`
        navbar_Btn.style.left = "250px";
        navOpen = true;
    }
    else{
        aside_Container.classList.remove('open');
        navbar_Btn.style.left = "10px";
        navbar_Btn.innerHTML = `<i class="fa-solid fa-bars"></i>`
        navOpen = false;
    }
})

/*-----------Settings Container ---------------*/
var open = false;
open_Btn.onclick = () =>{
    if(open == false){
        color_Container.style.display = "block";
        open=true;
    }
    else{
        color_Container.style.display = "none";
        open=false;
    }
}

var alternateColor = document.querySelectorAll(".alternate-color");

function setActiveStyle(color){
    alternateColor.forEach((style)=>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled",true)
        }
    })
}


var mode_Btn = document.querySelector('.mode_Btn');

mode_Btn.addEventListener('click',()=>{
    if(mode_Btn.innerHTML == `<i class="fa-solid fa-sun"></i>`){
        document.body.classList.remove('dark');
        mode_Btn.innerHTML = `<i class="fa-solid fa-moon"></i>`
    }
    else{
        document.body.classList.add('dark');
        mode_Btn.innerHTML = `<i class="fa-solid fa-sun"></i>`
    }
})

window.onload = () =>{
   if(document.body.classList.contains('dark')){
    mode_Btn.querySelector('i').classList.add("fa-sun");
   }
   else{
    mode_Btn.querySelector('i').classList.add("fa-moon");
   }
}


window.onscroll = () =>{
    color_Container.style.display = "none";
    // aside_Container.classList.remove('open');

}