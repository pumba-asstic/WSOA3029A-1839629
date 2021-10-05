const aboutBtn = document.querySelector('#about')
const theoryBtn = document.querySelector('#theory')
const dataVisBtn = document.querySelector('#datasets')

(function () {
 const {pathname} = window.location;

if (pathname != "/index.html") {
   // const homeBtn = document.querySelector("#index");

  // homeBtn.addEventListener("click",() => {
      // navToPage(`${window.location.origin}/index.html`);
   // });
   console.log("hello")
}

})()


function navToPage(link) {
    window.location = link;
}

aboutBtn.addEventListener("click", () =>{
    navToPage(`${window.location.origin}/homepage.html`);
});

theoryBtn.addEventListener("click", () =>{
    navToPage("/theory/blogposts/index.html");
});

dataVisBtn.addEventListener("click", () =>{
    navToPage("/Datasets/index.html");
});

(function(){
 const{pathname} = window.location;

 if(pathname ="/theory/blogposts/index.html"){ 
     const wireBtn= document.querySelector("#wires");

    wireBtn.addEventListener("click",() =>{
        navToPage(`${window.location.origin}/theory/wireframes/index.html`);
    });
 }
});