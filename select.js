const element = document.getElementById("mybtn1");
element.addEventListener("click", myFunction);

function myFunction() {
    const div = document.querySelector('.era')
    const name = document.createElement('ol')
    div.appendChild(name)
    const add = document.createElement('li')
    add.innerText = document.getElementById('mybtn1').parentNode.childNodes[3].innerText;
    name.appendChild(add)
    const button = document.querySelector('#mybtn1')
    button.disabled = true
    mybtn1.style.backgroundColor='lightblue'
}