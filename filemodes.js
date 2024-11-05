    function setFileMode() {
        /*
        Add or change language choices and syntax color themes
        */
      let ext;
        ext = gvar.fname.substring( gvar.fname.lastIndexOf(".") + 1 );
        if (ext === "") {
            return;
        }
        /*                      COLOR THEMES
            monokai  cobalt  vibrant_ink  clouds_midnight  solarized_dark
            tomorrow_night_eighties  twilight  kr_theme  Terminal
            solarized_light  textmate  tomorrow_night  twilight
        */
        switch(ext) {
        case "c":
            editor.session.setMode("ace/mode/c_cpp");
            editor.setTheme("ace/theme/monokai");
            break;
        case "py":
            editor.session.setMode("ace/mode/python");
            editor.setTheme("ace/theme/twilight");
            break;
        case "js":
            editor.session.setMode("ace/mode/javascript");
            editor.setTheme("ace/theme/monokai");
            break;
        case "md":
            editor.session.setMode("ace/mode/markdown");
            editor.setTheme("ace/theme/solarized_dark");
            break;
        case "json":
            editor.session.setMode("ace/mode/json");
            editor.setTheme("ace/theme/tomorrow_night_eighties");
            break;
        case "sh":
            editor.session.setMode("ace/mode/sh");
            editor.setTheme("ace/theme/clouds_midnight");
            break;
        case "h":
            editor.session.setMode("ace/mode/c_cpp");
            editor.setTheme("ace/theme/monokai");
            break;
        case "html":
            editor.session.setMode("ace/mode/html");
            editor.setTheme("ace/theme/monokai");
            break;
        case "css":
            editor.session.setMode("ace/mode/css");
            editor.setTheme("ace/theme/cobalt");
            break;
        case "go":
            editor.session.setMode("ace/mode/golang");
            editor.setTheme("ace/theme/monokai");
            break;
        case "sql":
            editor.session.setMode("ace/mode/sql");
            editor.setTheme("ace/theme/twilight");
            break;
        default:
            editor.session.setMode("ace/mode/bash");
            editor.setTheme("ace/theme/terminal");
      }
    }
