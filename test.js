require.config({
    paths: {
        "codemirror": "bower_components/codemirror/lib/codemirror",
        "showhint" : "bower_components/codemirror/addon/hint/show-hint"
    }
});

require(['codemirror', 'showhint'], function(CodeMirror, sh) {
    console.log(CodeMirror.defaults);
    console.log(CodeMirror.showHint);
});