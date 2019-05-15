var css = document.querySelector("#css");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementsByTagName("body")[0];
var copy = document.getElementById("copy");
var clipboard = new ClipboardJS(copy);
var tooltip = document.getElementById("tooltip");


function changeColor(){
    body.style.background = 
    "linear-gradient(to right, #" 
    + color1.value 
    + ", #" 
    + color2.value 
    + ")";
    css.innerHTML = 'body {<br> <span class="indent">background: ' + body.style.background + ';</span><br>}';    
}

clipboard.on('success', function(e) {
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = "1";
    tooltip.textContent = "Copied!"
    e.clearSelection();
});

clipboard.on('error', function(e) {
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = "1";
    tooltip.textContent = "Press Ctrl + C to copy"
});

body.addEventListener("click", function(e){
    if (e.target !== copy && e.target !== copy.children[0]){
        tooltip.style.visibility = "hidden";
        tooltip.style.opacity = "0";
        tooltip.textContent = "";
    }
});

changeColor();
