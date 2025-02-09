document.addEventListener("DOMContentLoaded", function () {
    let loader = document.getElementById("loader"); 
    document.body.classList.add("loading");
    
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
            document.body.classList.remove("loading");
        }, 500);
    }, 2000); // 2 sec min time
});