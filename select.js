function select(id) {
    count++
    if (count < 6) {
        const div = document.querySelector('.era')
        const name = document.createElement('ul')
        div.appendChild(name)
        const add = document.createElement('li')
        add.innerText = count + '. ' + document.getElementById(id).parentNode.childNodes[3].innerText;
        name.appendChild(add)
    }
    else {
        alert("Sorry! You can't select more.")
        count--
        a=false
    }
}
let a=true
let count=0

document.getElementById("mybtn1").addEventListener("click", function () {
    select('mybtn1')
    if (count < 6 && a) {
        document.querySelector('#mybtn1').disabled = true
        mybtn1.style.backgroundColor = 'lightblue'
    }
});

document.getElementById("mybtn2").addEventListener("click", function () {
    select('mybtn2')
    if (count < 6 && a) {
        document.querySelector('#mybtn2').disabled = true
        mybtn2.style.backgroundColor = 'lightblue'
    }
});

document.getElementById("mybtn3").addEventListener("click", function () {
    select('mybtn3')
    if (count < 6 && a) {
        document.querySelector('#mybtn3').disabled = true
        mybtn3.style.backgroundColor = 'lightblue'
    }
});


document.getElementById("mybtn4").addEventListener("click", function () {
    select('mybtn4')
    if (count < 6 && a) {
        document.querySelector('#mybtn4').disabled = true
        mybtn4.style.backgroundColor = 'lightblue'
    }
});

document.getElementById("mybtn5").addEventListener("click", function () {
    select('mybtn5')
    if (count < 6 && a) {
        document.querySelector('#mybtn5').disabled = true
        mybtn5.style.backgroundColor = 'lightblue'
    }
});

document.getElementById("mybtn6").addEventListener("click", function () {
    select('mybtn6')
    if (count < 6 && a) {
        document.querySelector('#mybtn6').disabled = true
        mybtn6.style.backgroundColor = 'lightblue'
    }
});

document.getElementById('cost-btn').addEventListener("click", function () {
    const playerInputString = document.getElementById('per-cost').value
    const playerInput=parseInt(playerInputString)
    document.getElementById('per-cost').value = ''
    const playerCost = playerInput * count
    document.getElementById('player-cost').innerText=playerCost
})

document.getElementById('total-calculate').addEventListener("click", function () {
    const managerInputString = document.getElementById('manager-cost').value
    const managerInput = parseInt(managerInputString)
    document.getElementById('manager-cost').value=''
    const coachInputString = document.getElementById('coach-cost').value
    const coachInput = parseInt(coachInputString)
    document.getElementById('coach-cost').value=''
    const totalPlayerCostString = document.getElementById('player-cost').innerText
    const totalPlayerCost = parseInt(totalPlayerCostString)
    document.getElementById('total-cost').innerText=totalPlayerCost+coachInput+managerInput
})
