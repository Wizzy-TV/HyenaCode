const htmlBTN = document.getElementsByClassName("html");
const cssBTN = document.getElementsByClassName("css");
const jsBTN = document.getElementsByClassName("js");

function activateStyles(button) {
    button.style.borderTop = "1px solid #81cc2b";
    button.style.borderRadius = "2px 2px 0 0";
    button.style.borderBottom = "2px solid #1c1f21";
    button.style.color = "#c4c8c6";
}
function deactivateStyles(button) {
    button.style.borderTop = "2px solid #262a2e";
    button.style.borderBottom = "2px solid #262a2e";
    button.style.borderRadius = "none";
    button.style.color = "#737577";
}

for (let i = 0; i < htmlBTN.length; i++) {
    htmlBTN[i].addEventListener('click', function() {
        activateStyles(htmlBTN[i]);
        deactivateStyles(cssBTN[i]);
        deactivateStyles(jsBTN[i]);
    });
}
for (let i = 0; i < cssBTN.length; i++) {
    cssBTN[i].addEventListener('click', function() {
        deactivateStyles(htmlBTN[i]);
        activateStyles(cssBTN[i]);
        deactivateStyles(jsBTN[i]);
    });
}
for (let i = 0; i < jsBTN.length; i++) {
    jsBTN[i].addEventListener('click', function() {
        deactivateStyles(htmlBTN[i]);
        deactivateStyles(cssBTN[i]);
        activateStyles(jsBTN[i]);
    });
}