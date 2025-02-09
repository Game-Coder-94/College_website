function myFunction(img) {
    var container = document.querySelector(".img_container");
    var expandedImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");

    expandedImg.src = img.src;
    imgText.innerHTML = img.alt;

    // Ensure display is set to block before animation
    container.style.display = "block";
    setTimeout(() => {
        container.classList.remove("hide");
        container.classList.add("show");
    }, 10); // Small delay to allow transition
}

document.querySelector(".closebtn").addEventListener("click", function() {
    var container = document.querySelector(".img_container");

    container.classList.remove("show");
    container.classList.add("hide");

    // Delay hiding the div completely after animation
    setTimeout(() => {
        container.style.display = "none";
    }, 300);
});
