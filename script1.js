

// function sayhello(name){
//     console.log("hihihihi " + name)
// }


function handleTitleClick(){
    h1.className = "active";
}

// const player = {
//     name:"han",
//     level:3,
//     sayhello: function(names){
//         console.log("hello! " + names);
//     },
// };

// // player.sayhello("hans");

// let age = prompt("how old are you?");


// age = parseInt(age);
// console.log(isNaN(age));

const check = document.querySelector("div.check:first-child h1");
// const check = document.querySelector("div.check h1");
// check.innerText = "Got you!";
// check.innerText = "hoho";
// check.style.color = "red";

console.dir(check);

function handleTitleClick(){

    const currentColor = check.style.color;
    let newColor;

    if(currentColor === 'purple'){
        newColor = "orange";
    }else{
        newColor = "purple";
    }
    check.style.color = newColor;
    
    console.log("title was clicked!");
}

function handleMouseEnter(){
    check.innerText = "mouse here!"
    console.log("mouse here!")
}

function handleMouseLeave(){
    check.innerText = "mouse gone!"
    console.log("mouse gone!")
}


function handleWindowResize(){
    document.body.style.backgroundColor = "lightblue";
}


function handleWindowCopy(){
    alert("cut!");
}

// check.addEventListener("mouseenter", handleMouseEnter);
// check.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("cut", handleWindowCopy);

check.addEventListener("click", handleTitleClick);