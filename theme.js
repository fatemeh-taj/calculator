"use strict";

let root = document.querySelector("html");

document.querySelector("#menu-icon").addEventListener("click", () => {
    
    switch (root.getAttribute("data-theme")) {
        case "default":
            root.setAttribute("data-theme", "green");
            break;
        
        case "green":
            root.setAttribute("data-theme", "blue");
            break;
        
        case "blue":
            root.setAttribute("data-theme", "pink");
            break;
        
        case "pink":
            root.setAttribute("data-theme", "default");
            break;
    }
});