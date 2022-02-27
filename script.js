const colors = ["green", "red", "rgba(133,122,100)", "#f1f578"];

const btn = document.getElementById("btn-color");
const color = document.getElementById("color");

btn.addEventListener("click", function(){
    // GET RANDOM COLOR 
        const randomNumber = getRandomNumber();
        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
})

function getRandomNumber (){
    return Math.floor(Math.random() * colors.length);
}