const getContent = () => {
    return document.getElementById("content");
}


function createNav(){
    const nav = document.createElement("div"); 
    nav.classList.add("nav"); 
    getContent().append(nav);
}

function createBody(){
    const body = document.createElement("div"); 
    body.classList.add("body"); 
    getContent().append(body);
}

function createGrid(){
    createNav();
    createBody();
}

createGrid();