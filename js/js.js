/** Auto-Generate Copyright Year. */
function setCopyRight() {
    const d = new Date();
    const yr = d.getFullYear();
    document.getElementById("c-year").innerText = yr;
    document.getElementById("copyright").title = 'COPYRIGHT \u00A9' + yr + ' \u2122T\u00A9ReMeTaL';
}

/**
 * Add or Remove CSS classes assigned to elements.
 * [id] The element to add or remove a class from.
 * [classId] The class to add or remove from the element.
 * @param {any} id The element to add or remove a class from.
 * @param {any} classId The class to add or remove from the element.
 */
function toggleClass(id, classId) {
    var tElement = document.getElementById(id);
    if (tElement.classList.contains(classId)) {
        tElement.classList.remove(classId);
        if (id == "body") {
            sessionStorage.removeItem('darkmode');
        }
    } else {
        tElement.classList.add(classId);
        if (id == "body") {
            sessionStorage.setItem('darkmode', 'true');
        }
    }
}

/**
 * If dark mode was set by the user apply css to subsequent pages.
 */
function getMode() {
    let darkmode = sessionStorage.getItem('darkmode');
    if (darkmode == "true") {
        document.getElementById('h-Contrast').setAttribute("checked", "checked");
        toggleClass('body', 'high-contrast');
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
