
const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){

//     //  아래와 같이 하면 기존 classname은 보존된다.
//     const clickedClass = "clicked";

//     if(h1.classList.contains(clickedClass)){
//         h1.classList.remove(clickedClass);
//     }else{
//         h1.classList.add(clickedClass);
//     }
// }


// toggle 은 h1의 classList에 clickedclass가 이미있는지 확인해서
// 만약 있다면 toggle remove clicked
// clicked가 없다면 classList에 추가해줌.
function handleTitleClick(){

    //  위랑 동일하게동작!
    const clickedClass = "clicked";

    h1.classList.toggle(clickedClass);
}


h1.addEventListener("click", handleTitleClick);