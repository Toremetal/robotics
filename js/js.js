
const d = new Date();
const yr = d.getFullYear();
document.getElementById("c-year").innerText = yr;
document.getElementById("copyright").title = 'COPYRIGHT \u00A9' + yr + ' \u2122T\u00A9ReMeTaL';

function toggleClass(id, classId) {
    var tElement = document.getElementById(id);
    if (tElement.classList.contains(classId)) {
        tElement.classList.remove(classId);
    } else {
        tElement.classList.add(classId);
    }
}

/**
 * Text: URL of the image to show.
 * @param {any} pic
 */
function showPic(pic) {
    const imgView = document.getElementById("image-window");
    imgView.src = pic;
    imgView.hidden = false;
}
function hidePic() {
    const imgView = document.getElementById("image-window");
    imgView.hidden = true;
}