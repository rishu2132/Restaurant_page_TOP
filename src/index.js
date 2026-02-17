import "./styles.css";
import { initialLoader } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

document.addEventListener('click',(e)=>{
    const content = document.getElementById("content");
    content.innerHTML="";
    if(e.target.innerText === "Home"){
        initialLoader();
    }else if(e.target.innerText === "Menu"){
        menuPage();
    }else if(e.target.innerHTML === "About"){
        aboutPage();
    }
})
console.log("is it working!!");
