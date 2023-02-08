const imageBox = document.getElementById("imageBox");
const myImg = document.getElementById("myImg");
const myInput = document.getElementById("myInput");
const inputButton = document.getElementById("inputButton");
const descriptionBox = document.getElementById("descriptionBox");
const optionsBox = document.getElementById("optionsBox");
const navBox = document.getElementById("navBox");

let currentPosition = 2;

const places = [
    {
        "name":"speeltuin1",
        "description":"je staat nu in een speeltuin",
        "image":"img/0.jpg",
        "options":[
            {"direction":"west","destination":2}
        ]
    },
    {
        "name":"Woonwijk",
        "description":"Je bent langs de speeltuin gelopen.",
        "image":"img/noord1.jpg",
        "options":[
            {"direction":"oost","destination":4},
            {"direction":"zuid","destination":2},
        ]
    },
    {
        "name":"Speeltuin",
        "description":"Je kijkt nu naar een speeltuin",
        "image":"img/noord.jpg",
        "options":[
            {"direction":"noord","destination":1},          
        ]
    },
    {
        "name":"deze doet niks2",
        "description":"deze doet niks2",
        "image":"img/s.jpg",
        "options":[
            {"direction":"zuid","destination":4}           
        ]
    },
    {
        "name":"oost1",
        "description":"Je kijkt nu naar oost!",
        "image":"img/oost1.jpg",
        "options":[
            {"direction":"noord","destination":7},      
        ]
    },
    {
        "name":"deze doet niks.",
        "description":"deze doet niks.",
        "image":"img/p.jpg",
        "options":[
            {"direction":"west","destination":8}           
        ]
    },
    {
        "name":"deze doet niks3",
        "description":"deze doetniks3",
        "image":"img/c.jpg",
        "options":[
            {"direction":"oost","destination":4}           
        ]
    },
    {
        "name":"flat",
        "description":"Je bent voorbij de flat gelopen",
        "image":"img/noord2.jpg",
        "options":[
            {"direction":"zuid","destination":4}           
        ]
    },
];

function showLocation(){
    navBox.innerHTML = "";
    optionsBox.innerHTML = "";
    
    descriptionBox.innerHTML = places[currentPosition].description;

    myImg.src = places[currentPosition].image;

    let possibleDirections = places[currentPosition].options.map((option,i) => { 

        let directionsP = document.createElement("p");
        optionsBox.appendChild(directionsP);

        let btn = document.createElement("input");
        btn.setAttribute("type","button");
        btn.setAttribute("class","inputButton");
        btn.setAttribute("value",option.direction);
        navBox.appendChild(btn);

        btn.addEventListener("click", ()=>{
            currentPosition = option.destination;

            showLocation();
        });
    });
}

showLocation();