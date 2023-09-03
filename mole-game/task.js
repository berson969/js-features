
let deadAttempt = 0
let lostAttempt = 0

const resetGame = () => {
    deadAttempt = 0
    lostAttempt = 0
    document.getElementById('dead').textContent = deadAttempt.toString()
    document.getElementById('lost').textContent = lostAttempt.toString()
}

for (let index = 1; index <= 9; index++) {

    let hole =  document.getElementById(`hole${index}`);

    hole.onclick = () => {
        if (hole.classList.contains('hole_has-mole')) {
            deadAttempt++;
            document.getElementById("dead").textContent = deadAttempt.toString()
        } else {
            lostAttempt++;
            document.getElementById("lost").textContent = lostAttempt.toString()
        }

        if (Number(deadAttempt) === 10) {
            alert(`Вы выиграли! ${deadAttempt}`);
            resetGame();
        } else if (Number(lostAttempt) === 5) {
            alert(`Вы проиграли! ${lostAttempt}`);
            resetGame();
        }
    }
}