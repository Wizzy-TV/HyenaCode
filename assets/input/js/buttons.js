function showHTML() {
    document.getElementById("editorhtml").style.display = "block";
    document.getElementById("editorcss").style.display = "none";
    document.getElementById("editorjs").style.display = "none";
};
function showCSS() {
    document.getElementById("editorhtml").style.display = "none";
    document.getElementById("editorcss").style.display = "block";
    document.getElementById("editorjs").style.display = "none";
};
function showJS() {
    document.getElementById("editorhtml").style.display = "none";
    document.getElementById("editorcss").style.display = "none";
    document.getElementById("editorjs").style.display = "block";
}