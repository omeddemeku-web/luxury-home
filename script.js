// Dark / Light Mode

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("light-mode")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme","light");
    }else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme","dark");
    }

});

// Save Theme

window.onload = () => {

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "light"){

        document.body.classList.add("light-mode");

        const icon = themeBtn.querySelector("i");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }

};
