// ===============================
// Live Digital Clock
// ===============================

function updateClock() {

    let now = new Date();

    let time = now.toLocaleTimeString();

    document.getElementById("time").innerHTML =
        " Current Time : " + time;

}

setInterval(updateClock, 1000);

updateClock();



// ===============================
// Enhanced Change Text
// ===============================

let changed = false;

function changeText() {

    let heading =
        document.getElementById("heading");

    let description =
        document.getElementById("description");

    if (!changed) {

        heading.innerHTML =
            "🚀 Welcome Future Frontend Developer!";

        heading.style.color = "#FFD700";

        description.innerHTML =
            "Congratulations! You have successfully interacted with this webpage using JavaScript DOM Manipulation. Keep learning, keep building and become a professional web developer.";

        description.style.color =
            "#0077ff";

        changed = true;

    }

    else {

        heading.innerHTML =
            "DecodeLabs Interactive Website";

        heading.style.color =
            "white";

        description.innerHTML =
            "Build beautiful, responsive and interactive websites using HTML, CSS and JavaScript.";

        description.style.color =
            "#333";

        changed = false;

    }

}



// ===============================
// Dark Mode
// ===============================

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

}



// ===============================
// Random Background Gradient
// ===============================

function changeColor() {

    let gradients = [

        "linear-gradient(135deg,#ff9a9e,#fad0c4)",

        "linear-gradient(135deg,#a18cd1,#fbc2eb)",

        "linear-gradient(135deg,#84fab0,#8fd3f4)",

        "linear-gradient(135deg,#f6d365,#fda085)",

        "linear-gradient(135deg,#43cea2,#185a9d)",

        "linear-gradient(135deg,#30cfd0,#330867)",

        "linear-gradient(135deg,#667eea,#764ba2)"

    ];

    let randomGradient =

        gradients[Math.floor(Math.random() * gradients.length)];

    document.body.style.background = randomGradient;

}



// ===============================
// Welcome Message
// ===============================

function welcomeMessage() {

    alert(

        "🎉 Welcome to DecodeLabs!\n\nThank you for visiting our interactive website.\nKeep learning HTML, CSS & JavaScript.\n\nHave a great day! 😊"

    );

}



// ===============================
// Card Hover Animation
// ===============================

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("mouseenter",function(){

        card.style.transform="scale(1.08)";
        card.style.transition="0.3s";

    });

    card.addEventListener("mouseleave",function(){

        card.style.transform="scale(1)";

    });

});



// ===============================
// Image Hover Effect
// ===============================

let images = document.querySelectorAll(".gallery img");

images.forEach(function(image){

    image.addEventListener("mouseenter",function(){

        image.style.transform="scale(1.08)";

    });

    image.addEventListener("mouseleave",function(){

        image.style.transform="scale(1)";

    });

});



// ===============================
// Page Loaded Message
// ===============================

window.onload = function(){

    console.log("DecodeLabs Project Loaded Successfully!");

}
