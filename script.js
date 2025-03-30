let currentIndex = 0;
const slides = document.querySelectorAll("#slides .slide");
const arrows = document.getElementsByClassName("arrow");
const indexHolder = document.getElementById("index");

window.onload = function() {
    if (currentIndex === slides.length - 1)
        {
            arrows[1].innerHTML = "";
            arrows[1].classList.remove("enabled");
        }
        else{
            arrows[1].innerHTML = "&#129138;";
            arrows[1].classList.add("enabled");
        }
        if (currentIndex === 0)
        {
            arrows[0].innerHTML = "";
            arrows[0].classList.remove("enabled");
        }
        else{
            arrows[0].innerHTML = "&#129136;";
            arrows[0].classList.add("enabled");
        }
        indexHolder.innerHTML = (currentIndex + 1).toString() + "/" + slides.length;       
};

function MoveSlides(dir)
{
    if (dir === 1) {
        currentIndex = Math.min(currentIndex + 1, slides.length - 1);
    } 
    else if (dir === -1) {
        currentIndex = Math.max(currentIndex - 1, 0);
    }
    const offset = -currentIndex * 100;
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${offset}%)`;
    });
    if (currentIndex === slides.length - 1)
    {
        arrows[1].innerHTML = "✖";
        arrows[1].classList.add("disabled");
        arrows[1].classList.remove("enabled");
    }
    else{
        arrows[1].innerHTML = "&#129138;";
        arrows[1].classList.remove("disabled");
        arrows[1].classList.add("enabled");
    }
    if (currentIndex === 0)
        {
            arrows[0].innerHTML = "✖";
            arrows[0].classList.add("disabled");
            arrows[0].classList.remove("enabled");
        }
        else{
        arrows[0].innerHTML = "&#129136;";
        arrows[0].classList.remove("disabled");
        arrows[0].classList.add("enabled");
    }
    indexHolder.innerHTML = (currentIndex + 1).toString() + "/" + slides.length;
}

document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "ArrowLeft":
            MoveSlides(-1);
            break;
        case "ArrowRight":
        case " ":
            MoveSlides(1);
            break;
    }
});