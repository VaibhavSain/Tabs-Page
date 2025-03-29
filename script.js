const btn1  = document.querySelector("#btn1");
const btn2 =  document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const heading = document.querySelector("#heading");
const para = document.querySelector("#para");

window.onload = function exampleFunction() {
    btn1.style.backgroundColor = "white";
    btn1.style.border = "2px solid red";
    heading.textContent = "What is Lorem Ipsum?";
    para.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"  ;  
    btn2.style.backgroundColor = "";
    btn2.style.border = "none";
    btn3.style.backgroundColor = "";
    btn3.style.border = "none";

}


btn1.addEventListener("click",() => {
    btn1.style.backgroundColor = "white";
    btn1.style.border = "2px solid red";
    heading.textContent = "What is Lorem Ipsum?";
    para.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"  ;  
    btn2.style.backgroundColor = "";
    btn2.style.border = "none";
    btn3.style.backgroundColor = "";
    btn3.style.border = "none";
})

btn2.addEventListener("click",() => {
    btn2.style.backgroundColor = "white";
    btn2.style.border = "2px solid red";
    btn1.style.backgroundColor = "";
    btn1.style.border = "none";
    btn3.style.border = "none";
    btn3.style.border = "none";
    heading.textContent = "Why do we use it?";
    para.textContent = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";

})
btn3.addEventListener("click",() => {
    btn2.style.backgroundColor = "";
    btn2.style.border = "none";
    btn1.style.backgroundColor = "";
    btn1.style.border = "none";

    btn3.style.backgroundColor = "white";
    btn3.style.border = "2px solid red";
    heading.textContent = "Where does it come from?";
    para.textContent = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.";
})