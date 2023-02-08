const img = document.getElementById("view");
const title = document.getElementById("title");
const text = document.getElementById("input");

const locations = [
    {
        "title": "plaats 0",
        "src": "img/0.jpg"
    },
    {
        "title": "plaats 1",
        "src": "img/1.jpg"
    },
    {
        "title": "plaats 2",
        "src": "img/2.jpg"
    },
    {
        "title": "plaats 3",
        "src": "img/3.jpg"
    },
    {
        "title": "plaats 4",
        "src": "img/4.jpg"
    },
    {
        "title": "plaats 5",
        "src": "img/5.jpg"
    },
    {
        "title": "plaats 6",
        "src": "img/6.jpg"
    },
    {
        "title": "plaats 7",
        "src": "img/7.jpg"
    },
    {
        "title": "plaats 8",
        "src": "img/8.jpg"
    },
    {
        "title": "plaats 9",
        "src": "img/9.jpg"
    },
    {
        "title": "plaats 10",
        "src": "img/10.jpg"
    },
    {
        "title": "plaats 11",
        "src": "img/11.jpg"
    },
]

function show(index) {
    let newview = locations[index] // TODO: proper checking

    img.src = newview.src;
    title.innerHTML = newview.title;
}

function getInput() {
    show(text.value); // switch view and title

    // cleanup
    text.value = "";
    text.focus();
}

show(0); // start value