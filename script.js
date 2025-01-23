let Rakesh= document.querySelector("#Rakesh");
let p1=document.querySelector("#p1");
let Kalpana= document.querySelector("#Kalpana");
let p2=document.querySelector("#p2");
let Sunita= document.querySelector("#Sunita");
let p3=document.querySelector("#p3");
let Sirisha= document.querySelector("#Sirisha");
let p4=document.querySelector("#p4");
let Prasanth= document.querySelector("#Prasanth");
let p5=document.querySelector("#p5");
let clicked_R= false;
Rakesh.addEventListener("click",()=>{
if(clicked_R=== true){
    p1.innerText=" ";
    Rakesh.style.backgroundImage=" none";
    clicked_R=false;
}
else{
    p1.innerText="Rakesh Sharma, born on January 13, 1949, in Patiala, Punjab, is a former Indian Air Force (IAF) pilot and the first Indian to travel to space. He flew aboard the Soviet spacecraft Soyuz T-11 on April 2, 1984, as part of a joint Indo-Soviet mission. During his eight days aboard the Salyut 7 space station, Sharma conducted scientific experiments and captured stunning images of India from space."
Rakesh.style.backgroundImage = "url('https://c.ndtvimg.com/2024-02/3jk369ng_rakesh-sharma_625x300_27_February_24.jpg?im=FeatureCrop,algorithm=dnn,width=545,height=307')";
Rakesh.style.backgroundSize = "cover";
Rakesh.style.backgroundRepeat = "no-repeat"; 
clicked_R=true;
}
})
let clicked_K= false;
Kalpana.addEventListener("click",()=>{
if(clicked_K=== true){
        p2.innerText=" ";
        Kalpana.style.backgroundImage=" none";
        clicked_K=false;
    }
else{
    p2.innerText="Kalpana Chawla, born on March 17, 1962, in Karnal, Haryana, was an Indian-American astronaut and aerospace engineer who became the first woman of Indian origin to travel to space. She flew her first mission aboard the Space Shuttle Columbia in 1997 as a mission specialist and primary robotic arm operator. "
    Kalpana.style.backgroundImage="url('https://i.ndtvimg.com/i/2018-02/kalpana-chawla_650x400_51517457408.jpg?downsize=545:307')";
    Kalpana.style.backgroundSize = "cover";
Kalpana.style.backgroundRepeat = "no-repeat"; 
clicked_K=true;
}
})
let clicked_S= false;
Sunita.addEventListener("click",()=>{
if(clicked_S=== true){
        p3.innerText=" ";
     Sunita.style.backgroundImage=" none";
        clicked_S=false;
    }
else{
    p3.innerText="Sunita Williams, born on September 19, 1965, in Euclid, Ohio, is an Indian-American astronaut and former United States Navy officer with roots in Gujarat, India. She became an astronaut in 1998 and flew on two major space missions: Expedition 14/15 (2006-2007) and Expedition 32/33 (2012), spending a total of 322 days in space."
    Sunita.style.backgroundImage="url('https://static.toiimg.com/thumb/msid-113291999,width-1280,height-720,resizemode-4/113291999.jpg')";
    Sunita.style.backgroundSize = "cover";
Sunita.style.backgroundRepeat = "no-repeat"; 
clicked_S=true;
}
})
let clicked_Si= false;
Sirisha.addEventListener("click",()=>{
if(clicked_Si=== true){
        p4.innerText=" ";
     Sirisha.style.backgroundImage=" none";
        clicked_Si=false;
    }
else{
    p4.innerText="Sirisha Bandla, born on October 4, 1986, in Guntur, Andhra Pradesh, is an Indian-American aerospace engineer and one of the few Indian-origin women to go to space. She flew aboard Virgin Galactic's SpaceShipTwo on July 11, 2021, as part of Unity 22, marking her as the fourth woman of Indian descent to go to space. As the Vice President of Government Affairs and Research Operations at Virgin Galactic, Bandla was involved in the company's space tourism efforts."
    Sirisha.style.backgroundImage="url('https://i.cdn.newsbytesapp.com/images/l93520210705165102.png')";
    Sirisha.style.backgroundSize = "cover";
Sirisha.style.backgroundRepeat = "no-repeat"; 
clicked_Si=true;
}
})
let clicked_P= false;
Prasanth.addEventListener("click",()=>{
if(clicked_P=== true){
        p5.innerText=" ";
     Prasanth.style.backgroundImage=" none";
        clicked_P=false;
    }
else{
    p5.innerText="Prasanth Balakrishnan Nair is one of the astronauts selected for India's ambitious Gaganyaan mission, which is set to be the country's first crewed space mission. This mission is being spearheaded by the Indian Space Research Organisation (ISRO) and aims to send Indian astronauts to low Earth orbit (LEO).The Gaganyaan mission is expected to involve sending a crew of two to three astronauts to space, and Nair is among those chosen to undergo intense training."
    Prasanth.style.backgroundImage="url('https://img.onmanorama.com/content/dam/mm/en/career-and-campus/top-news/images/2024/2/28/prasanth-balakrishnan-nair-0.jpg?crop=fc&w=575&h=575')";
    Prasanth.style.backgroundSize = "cover";
Prasanth.style.backgroundRepeat = "no-repeat"; 
clicked_P=true;
}
})