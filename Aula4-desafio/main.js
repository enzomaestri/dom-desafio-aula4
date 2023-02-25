const cores = document.querySelectorAll("[cor]");

function mostraTintas() {
    cores.forEach( (element) => {
        element.removeAttribute("data-view");
    })
}

function hideTintas() {
    cores.forEach( (element) => {
        element.setAttribute("data-view", "hidden");  
    })
    
}