const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click",()=>{
    navigation.classList.toggle("slide-in");
    hamburger.querySelectorAll("img").forEach((e)=>{
        console.log(e);
        e.classList.toggle("mob-hide");
    })
});