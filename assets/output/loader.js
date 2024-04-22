window.onload = function() {
    var savedHTML = localStorage.getItem('savedHTML');
    var savedCSS = localStorage.getItem('savedCSS');
    var savedJS = localStorage.getItem('savedJS');

    if (savedHTML) {
        document.getElementById('htmlOutput').innerHTML = savedHTML;
    } else {
        document.getElementById('htmlOutput').innerHTML = "";
    }

    if (savedCSS) {
        document.getElementById('cssOutput').innerHTML = savedCSS;
    } else {
        document.getElementById('cssOutput').innerHTML = "";
    }

    if (savedJS) {
        document.getElementById('jsOutput').innerHTML = savedJS;
    } else {
        document.getElementById('jsOutput').innerHTML = "";
    }
};

window.addEventListener('storage', function(e) {
    location.reload()
});