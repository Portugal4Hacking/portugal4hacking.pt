var burgerIcon = document.getElementById("nav-icon");
var navb = document.getElementById("navbar");
var navAberta = false;
var navListas = document.querySelectorAll("li");
var scroller = document.getElementById("scroller"); 


//Click da seta na landing page
scroller.addEventListener("click", ()=>{
    window.location="#faq";
});


//Toggler da nav no telemovel
burgerIcon.addEventListener("click", NavToggle);
function NavToggle(){
    
    if(navAberta == false){
        navb.style.height = "100vh";
        navb.style.backgroundColor = "#272933f2";
        console.log(navAberta)
        navAberta = true
        
        for(let i = 0; i < navListas.length; i++){
            navListas[i].style.display = "block";
        }
    }
    else {
        navb.style.height = "10vh";
        navb.style.backgroundColor = "transparent";
        navAberta = false;
        for(let i = 0; i < navListas.length; i++){
            navListas[i].style.display = "none";
        }
    }
}


//Nav bar com background quando se da scroll
document.addEventListener("scroll", NavPC)
function NavPC(){

    if(window.scrollY==0&&window.scrollX==0){
        navb.classList.remove("navToggleOn");
        navb.classList.add("navToggleOff");
    }else{
        navb.classList.remove("navToggleOff");
        navb.classList.add("navToggleOn");
    }

}


//Botao contactar dos partners
bt_contactar = document.getElementById("bt_contactar").addEventListener("click", ()=>{
   window.location.href = "mailto:contacto@portugal4hacking.pt";
});


//FOLLOW BUTTONS
//DISCORD
document.getElementById("follow-discord").addEventListener("click",  ()=>{
    window.open("https://discord.com/invite/MTRCTnt")
});
//TWITTER
document.getElementById("follow-twitter").addEventListener("click",   ()=>{
    window.open("https://twitter.com/P4Hacking")
});
//INSTAGRAM
document.getElementById("follow-instagram").addEventListener("click",  ()=>{
//TWITCH
});
document.getElementById("follow-twitch").addEventListener("click",  ()=>{
});


