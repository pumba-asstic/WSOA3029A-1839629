
const homeBtn = document.querySelector('#index')
const aboutBtn = document.querySelector('#about')
const theoryBtn = document.querySelector('#theory')
const dataVisBtn = document.querySelector('#datasets')
const wireframeBtn = document.querySelector('#wires')

function navToPage(link){
    window.location = link;
}

homeBtn.addEventListener("click", function(){
    navToPage("index.html");
});

aboutBtn.addEventListener("click", () =>{
    navToPage("homepage.html");
});

theoryBtn.addEventListener("click", () =>{
    navToPage("theoryhomepage.html");
});

dataVisBtn.addEventListener("click", () =>{
    navToPage("datasetshomepage.html");
});

wireframeBtn.addEventListener("click", ()=>{
    navToPage("index.html");
})
