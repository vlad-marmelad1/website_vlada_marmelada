let switchMode = document.getElementById("switchMode");

switchMode.onclick = function() {
    let oaoaoao = document.getElementById("oaoaoao");

    if (oaoaoao.getAttribute("href") == "css/style.css"){
        oaoaoao.href = "css/dark_mode.css";
    }
    else{
        oaoaoao.href = "css/style.css";
    }
}