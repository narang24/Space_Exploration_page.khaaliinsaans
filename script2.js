let btn1= document.querySelector("#btn1");
let display= document.querySelector("#display");
let nickNames=["Captain {userName} Crunch Nebula","Major {userName} Moon Muncher","Admiral {userName} AstroNoodle",
    "General {userName} Galactic Gobbler", "Captain {userName} Meteor Munch","Sergeant {userName} Starlight Snack", "Major {userName} MilkyWay Muncher", "General {userName} Cosmic Cookie","Commander {userName} WobbleOrbit", "Lieutenant {userName} Rocket Waffle","Admiral {userName} Asteroid Avocado",]
const spaceName= function(userName){
    if(userName !== ''){
        const radidx= Math.floor(Math.random()*10);
        const nickName= nickNames[radidx].replace("{userName}",userName.trim().split(' ')[0]);
        console.log(nickName);
        display.innerText = nickName;
    }
    else{
        display.innerText = "Enter your name first!!!"
    }
}
btn1.addEventListener("click",()=>{
    const userName= document.querySelector("#name").value;
    spaceName(userName);
})