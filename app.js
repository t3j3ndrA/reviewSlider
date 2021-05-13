// person details to display
const personList = [
{
    id: 1,
    name : "Alexi Flemingo",
    img : "./content-source/person1.jpg",
    job : "Frontend Developer",
    about : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eos ex quas nobis nihil assumenda, labore illo, quasi velit voluptatum ullam. Atque dolorem laboriosam cumque?"
},  

{
    id: 2,
    name : "Rocki Bhai",
    img : "./content-source/person2.jpg",
    job : "UX Designer",
    about : "Consectetur adipisicing elit. Ab eos ex quas nobis nihil assumenda, labore illo, quasi velit voluptatum ullam. Atque dolorem laboriosam cumque? Lorem ipsum dolor sit amet"
},  

{
    id: 3,
    name : "Angela Queen",
    img : "./content-source/person3.jpg",
    job : "Server Side Manager",
    about : "Voluptatum ullam. Atque dolorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eos ex quas nobis nihil assumenda, labore illo, quasi velit voluptatum ullam. Atque dolorem laboriosam cumque?"
}, 

{
    id: 4,
    name : "Munmun Dutta",
    img : "./content-source/person4.jpg",
    job : "Network Manager",
    about : "Atque dolorem laboriosam cumque? Consectetur adipisicing elit. Ab eos ex quas nobis nihil assumenda, labore illo, quasi velit voluptatum ullam. Atque dolorem laboriosam cumque? Lorem ipsum dolor sit amet"
},  

{
    id: 5,
    name : "Buddha",
    img : "./content-source/person5.jpg",
    job : "Cyber Security HOD",
    about : "Ab eos ex quas nobis nihil assumenda, labore illo, quasi velit voluptatum ullam. Atque dolorem laboriosam cumque? Lorem ipsum dolor sit Atque dolorem laboriosam cumque? Consectetur adipisicing elit. Ab eos ex quas nobis nihil assumenda, labore illo, quasi velit voluptatum ullam. Atque dolorem laboriosam cumque? Lorem ipsum dolor sit amet"
},  

]

// DOM selections
let personImg = document.querySelector(".myimg");
let personName = document.querySelector(".name");
let job = document.querySelector(".job");
let info = document.querySelector(".info");


//button selections for next, preveous, surprise operations
const prvBtn = document.querySelector(".prvBtn");
const nxtBtn = document.querySelector(".nxtBtn");
const randomBtn = document.querySelector(".random");

// setting intial item as 1st
let currentPosition =1;


//next button clicking operation
nxtBtn.addEventListener("click",
function(){
    currentPosition++;
    if(currentPosition === personList.length) currentPosition = 0;
    const item = personList[currentPosition];
    personName.textContent = item.name;
    personImg.scr = item.img;
    personImg.setAttribute("src",item.img);
    job.textContent = item.job;
    info.textContent = item.about;

})


// Preveous button clicking operation
prvBtn.addEventListener("click",
function(){  
    currentPosition--;
    if(currentPosition <= 0 ) currentPosition = personList.length-1;

    const item = personList[currentPosition];
    personName.textContent = item.name;
    personImg.scr = item.img;
    personImg.setAttribute("src",item.img);
    job.textContent = item.job;
    info.textContent = item.about;

})


randomBtn.addEventListener("click",
function(){  
    
    const item = personList[getRandomNumber()];
    personName.textContent = item.name;
    personImg.scr = item.img;
    personImg.setAttribute("src",item.img);
    job.textContent = item.job;
    info.textContent = item.about;

})

function getRandomNumber(){
    return Math.floor(Math.random()*personList.length);
}


