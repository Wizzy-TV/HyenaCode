const editorhtml = ace.edit("editorhtml");

editorhtml.session.setMode("ace/mode/html");
editorhtml.setTheme('ace/theme/tomorrow_night');
editorhtml.focus();

editorhtml.setOptions({
    fontSize: "15px",
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    printMargin: false,
});

function saveHTML () {
    var code = editorhtml.getValue();
    localStorage.setItem('savedHTML', code);
}

editorhtml.getSession().on('change', function() {
    saveHTML();
});

function loadHTML() {
    var savedHTML = localStorage.getItem('savedHTML');
    if (savedHTML !== null) {
        editorhtml.setValue(savedHTML);
    }
}
loadHTML();

const editorcss = ace.edit("editorcss");

editorcss.session.setMode("ace/mode/css");
editorcss.setTheme('ace/theme/tomorrow_night');
editorcss.focus();

editorcss.setOptions({
    fontSize: "15px",
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    printMargin: false,
});

function saveCSS () {
    var code = editorcss.getValue();
    localStorage.setItem('savedCSS', code);
}

editorcss.getSession().on('change', function() {
    saveCSS();
});

function loadCSS() {
    var savedCSS = localStorage.getItem('savedCSS');
    if (savedCSS !== null) {
        editorcss.setValue(savedCSS);
    }
}
loadCSS();

const editorjs = ace.edit("editorjs");

editorjs.session.setMode("ace/mode/javascript");
editorjs.setTheme('ace/theme/tomorrow_night');
editorjs.focus();

editorjs.setOptions({
    fontSize: "15px",
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    printMargin: false,
});

function saveJS () {
    var code = editorjs.getValue();
    localStorage.setItem('savedJS', code);
}
editorjs.getSession().on('change', function() {
    saveJS();
});

function loadJS() {
    var savedJS = localStorage.getItem('savedJS');
    if (savedJS !== null) {
        editorjs.setValue(savedJS);
    }
}
loadJS();