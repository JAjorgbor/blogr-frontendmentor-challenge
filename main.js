let dropDownBtn=Array.from(document.querySelectorAll(".item_heading"));
let dropDownArrow=Array.from(document.querySelectorAll(".item_heading_drop_image"))
let dropdownMenue=Array.from(document.querySelectorAll(".nav_item_links"));
let isPushed=true;
for (let i=0;i<dropDownBtn.length;i++){
    dropDownBtn[i].addEventListener("click",dropFunc);
    
}
for (let i=0;i<dropDownArrow.length;i++){
    dropDownBtn[i].addEventListener("click",dropFunc);
    
}
function dropFunc(e){
    let index;
    if(dropDownBtn.includes(e.target)){
    index=dropDownBtn.indexOf(e.target);
    if(isPushed){
        e.target.children[0].style.transform="rotate(180deg)";
    }
    else{
        e.target.children[0].style.transform="rotate(0deg)";
    }
}
   else{
    index=dropDownArrow.indexOf(e.target);
    if(isPushed){
        e.target.style.transform="rotate(180deg)";
    }
    else{
    e.target.style.transform="rotate(0deg)";
    }
}

    if(isPushed){
        dropdownMenue[index].classList.add("dropdown");
        isPushed=false;
    }
    else{
        dropdownMenue[index].classList.remove("dropdown")
        isPushed=true;
        
    }
}
// hamburger menue events
let hamburger =document.querySelector(".hamburger");
isPushed=true;
hamburger.addEventListener("click", function(e){
    e.target.style.transform="rotate(720)";
if(isPushed){
    e.target.setAttribute("src","./images/icon-close.svg");

    document.querySelector(".links").classList.add("menue-open");
    isPushed=false;
}
else{
    e.target.setAttribute("src","./images/icon-hamburger.svg");
document.querySelector(".links").classList.remove("menue-open");

    isPushed=true;
}
})
// Create a match function
function myFunction(x) {
    if (x.matches) {
        for(let i =0;i<dropDownArrow.length;i++){document.querySelectorAll(".item_heading_drop_image")[i].setAttribute("src","./images/icon-arrow-dark.svg");}
        document.querySelector(".flex-item-image img").setAttribute("src", "./images/illustration-editor-mobile.svg")
        document.querySelector(".container3 .flex-item-image img").setAttribute("src", "./images/illustration-laptop-mobile.svg")
        
    }
    else{
        for(let i =0;i<dropDownArrow.length;i++){document.querySelectorAll(".item_heading_drop_image")[i].setAttribute("src","./images/icon-arrow-light.svg");}
        document.querySelector(".flex-item-image img").setAttribute("src", "./images/illustration-editor-desktop.svg")
        document.querySelector(".container3 .flex-item-image img").setAttribute("src", "./images/illustration-laptop-desktop.svg")
    }
  }
  
  // // Create a MediaQueryList object
  const windowSize = window.matchMedia("(max-width: 750px)")
  
  // Call the match function at run time:
  myFunction(windowSize);
  
  // Add the match function as a listener for state changes:
  windowSize.addListener(myFunction);