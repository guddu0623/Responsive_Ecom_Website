const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const cart = document.getElementById("cart");
const close = document.getElementById("close");
if(bar){
    bar.addEventListener("click", () =>{
        nav.classList.add("active")
        bar.style.display ="none";
        if(cart) cart.style.display = "none";
        });

}

if(close){
    close.addEventListener("click", () =>{
        nav.classList.remove("active")
        bar.style.display = "block";
        cart.style.display = "block";
        });

}