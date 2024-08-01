function toggleVisibility(){
    var x = document.getElementById("password");
    var y = document.getElementById("showPW");
    if (y.checked===true && x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}