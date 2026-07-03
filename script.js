function upDate(previewPic) {

    console.log("Image selected");

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    imageDiv.innerHTML = previewPic.alt;
}

function undo() {

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "";

    imageDiv.innerHTML = "Hover over an image below to display here.";
}

function addTabFocus() {

    console.log("Page loaded");

    let images = document.querySelectorAll(".gallery img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
