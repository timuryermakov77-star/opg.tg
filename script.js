const searchInput = document.getElementById("searchInput");

const images = document.querySelectorAll(".gallery img");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    images.forEach((img) => {

        const alt = img.alt.toLowerCase();

        if (alt.includes(value)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }

    });

});