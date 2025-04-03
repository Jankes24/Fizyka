function OpenTab(evt, tabName) {
    var tabContent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }
    
    var tabLinks = document.getElementsByClassName("tab");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }
    
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
    
    var activeTabAccordions = document.getElementById(tabName).querySelectorAll(".accordion");
    for (var i = 0; i < activeTabAccordions.length; i++) {
        if (activeTabAccordions[i].classList.contains("active")) {
            var panel = activeTabAccordions[i].nextElementSibling;
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
    
    document.querySelector(".tab.active").click();
});