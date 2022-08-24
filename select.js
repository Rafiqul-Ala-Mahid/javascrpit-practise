const element = document.getElementById("mybtn1");
element.addEventListener("click", myFunction);

function myFunction() {
    var x = document.createElement("OL");
    x.setAttribute("id", "myOl");
    document.body.appendChild(x);

    var y = document.createElement("LI");
    var t = document.createTextNode("Coffee");
    y.appendChild(t);
    document.getElementById("myOl").appendChild(y);
}