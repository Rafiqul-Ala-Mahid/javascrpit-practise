function select(id) {
    const div = document.querySelector('.era')
    const name = document.createElement('ol')
    div.appendChild(name)
    const add = document.createElement('li')
    add.innerText = document.getElementById(id).parentNode.childNodes[3].innerText;
    name.appendChild(add)
}

document.getElementById("mybtn1").addEventListener("click", myFunction1);

function myFunction1() {
    select('mybtn1')
    document.querySelector('#mybtn1').disabled = true
    mybtn1.style.backgroundColor='lightblue'
}

document.getElementById("mybtn2").addEventListener("click", myFunction2);

function myFunction2() {
    select('mybtn2')
    document.querySelector('#mybtn2').disabled = true
    mybtn2.style.backgroundColor = 'lightblue'
}

document.getElementById("mybtn3").addEventListener("click", myFunction3);

function myFunction3() {
    select('mybtn3')
    document.querySelector('#mybtn3').disabled = true
    mybtn3.style.backgroundColor = 'lightblue'
}

document.getElementById("mybtn4").addEventListener("click", myFunction4);

function myFunction4() {
    select('mybtn4')
    document.querySelector('#mybtn4').disabled = true
    mybtn4.style.backgroundColor = 'lightblue'
}

document.getElementById("mybtn5").addEventListener("click", myFunction5);

function myFunction5() {
    select('mybtn5')
    document.querySelector('#mybtn5').disabled = true
    mybtn5.style.backgroundColor = 'lightblue'
}

document.getElementById("mybtn6").addEventListener("click", myFunction6);

function myFunction6() {
    select('mybtn6')
    document.querySelector('#mybtn6').disabled = true
    mybtn6.style.backgroundColor = 'lightblue'
}