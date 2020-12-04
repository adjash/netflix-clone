const toggle = document.getElementsByClassName("toggle-title");

toggle.addEventListener("click", () => {
    let toggleInfo = document.getElementsByClassName('toggle-info');
    toggleInfo.classList.add("visible-toggle");
    
})