function onmouseenter_func(){
    var elem = document.getElementById("variant_cell");
    var random_color_background = "#" + Math.floor(Math.random()*16777215).toString(16);
    var random_color = "#" + Math.floor(Math.random()*16777215).toString(16);
    elem.style.background = random_color_background;
    elem.style.color = random_color;
}

function onclick_func(){
    var color_w = document.getElementById("color_widget");
    var elem = document.getElementById("variant_cell");
    var random_color = "#" + Math.floor(Math.random()*16777215).toString(16);
    elem.style.background = color_w.value;
    elem.style.color = random_color;
}

function ondblclick_func(){
    var color_w = document.getElementById("color_widget");
    var elem = document.querySelectorAll("td.query_select");
    var random_color = "#" + Math.floor(Math.random()*16777215).toString(16);
    for (let i = 0; i < elem.length; i++){
        elem[i].style.background = color_w.value;
        elem[i].style.color = random_color;
    }
}