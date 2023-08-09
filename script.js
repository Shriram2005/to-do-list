// main tasks section ----------------------------------------->

// get previous data function
function getData() {
    let savedDivContent = localStorage.getItem('savedDivContent');
    if (savedDivContent) {
        document.getElementById('tasks-box').innerHTML = savedDivContent;
    }
}

getData();

// save the data in device function
function saveData() {
    const divContent = document.getElementById('tasks-box').innerHTML;
    localStorage.setItem('savedDivContent', divContent);
}

const newTask = document.getElementById("input-task");
const listContainer = document.querySelector("#list");

function addTask() {
    if (newTask.value === "") {
        alert("Cannot be empty");
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = newTask.value;
        listContainer.appendChild(li);
        newTask.value = "";

        let span = document.createElement("span");
        span.innerText = "\u00d7"
        li.append(span);

        // insert at first position------->
        listContainer.insertBefore(li, listContainer.firstChild);
        saveData();
    }
}

newTask.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        addTask();
    }
})

// remove task -button 
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
        e.stopPropagation();
    }
    else if (e.target.tagName === "LI") {
        e.target.classList.toggle("click-item");
        saveData();
    }
}, false);
// main task section ends-------------------------->


// Background image changes ----------------------------------->

const bgButton = document.querySelector(".bg-change");
const BackGround = document.querySelector(".container");
const backgroundNo = [
    'linear-gradient(130deg,rgb(115, 0, 255),rgb(102, 0, 128)',
    'url("./contents/backgrounds/bg1.svg")',
    'url("./contents/backgrounds/bg2.jpg")',
    'url("./contents/backgrounds/bg3.webp")',
    'url("./contents/backgrounds/bg4.svg")',
    'linear-gradient(darkorange, white, green)',
    'linear-gradient(130deg,purple, black,red)',
    'linear-gradient(black, black)',
    'url("./contents/backgrounds/leaves.svg")',
    'url("./contents/backgrounds/speed-lines.svg")',
    'url("./contents/backgrounds/spotlight.svg")',
    'url("./contents/backgrounds/field.svg")',
    'url("./contents/backgrounds/circles.svg")',
];



function BgGetData() {
    // get bg 
    getBG = localStorage.getItem('background');
    if (getBG !== null) {
        i = parseInt(getBG);
    }
}

function BgSaveData() {
    // save bg 
    let setBG = i;
    localStorage.setItem('background', setBG);
}

var i = 0;
BgGetData();
// set the image received by getData() 
BackGround.style.backgroundImage = backgroundNo[i];


// change images prev and next on button click on button click 
let bgPrevBtn = document.querySelector("#bg-prev");
let bgNextBtn = document.querySelector("#bg-next");
bgPrevBtn.addEventListener("click", () => {
    i--;
    if (i <= 0) {
        i = backgroundNo.length;
    }
    BackGround.style.backgroundImage = backgroundNo[i];
    BgSaveData();
});

bgNextBtn.addEventListener("click", () => {
    i++;
    if (i >= backgroundNo.length) {
        i = 0;
    }
    BackGround.style.backgroundImage = backgroundNo[i];
    BgSaveData();
});




// notice area ---------------------------------------------->

// check whether user visited before or not
const visitedBefore = localStorage.getItem('visited');
if (visitedBefore == 'true') {
    document.querySelector(".notice").style.display = "none";
}
// remove notice on button click
const removeNote = document.querySelector(".notice span");
removeNote.addEventListener("click", () => {
    document.querySelector(".notice").style.display = "none";
    // save visited as true
    localStorage.setItem('visited', 'true');
})


// dark/white mode button ------------------------------------>

const settingsBtn = document.querySelector(".settings-logo");
const blackEffect = document.querySelector(".black-effect");

let darkBtn = document.querySelector(".dark-btn");
darkBtn.addEventListener("click", () => {
    let box = document.querySelector('.box');
    box.classList.toggle("dark-mode");

    let titleLogo = document.querySelector("#list-logo");

    if (titleLogo.getAttribute("src") === "contents/to-do-list.png") {
        titleLogo.src = "contents/to-do-list-w.png";
    } else if (titleLogo.getAttribute("src") === "contents/to-do-list-w.png") {
        titleLogo.src = "contents/to-do-list.png";
    }

});








