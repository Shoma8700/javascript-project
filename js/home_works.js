const gmailInput = document.querySelector("#gmail_input");
const gmailCheck = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^(.+)@([a-z]{5})\.(com)$/; // можно место "gmail" ([a-z]{5})  или вопщем просто "gmail.com"

gmailCheck.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"

    } else {
        gmailResult.innerHTML = "ERROR"
        gmailResult.style.color = "red"

    }

};


const childBlock = document.querySelector(".child_block")


let positionX = 0;
let positionY = 0;

const moveBlock = () => {
    if (positionX <= 448 && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 1)
    } else if (positionX >= 448 && positionY <= 448) {
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 1)
    } else if (positionX >= 0 && positionY >= 448) {
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 1)
    } else if (positionX <= 0 && positionY >= 0) {
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 1)
    }
}
moveBlock()



let seconds = document.getElementById("seconds");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resumeButton = document.getElementById("resume");
let resetButton = document.getElementById("reset");
let counter = 0;
let intervalId;

function incrementCounter() {
    counter++;
    seconds.textContent = counter;
}

startButton.onclick = () => {
    clearInterval(intervalId);
    intervalId = setInterval(incrementCounter, 1000);
};

stopButton.onclick = () => {
    clearInterval(intervalId);
};

resumeButton.onclick = () => {
    clearInterval(intervalId);
    intervalId = setInterval(incrementCounter, 1000);
};

resetButton.onclick = () => {
    clearInterval(intervalId);
    counter = 0;
    seconds.textContent = counter;
};
//test

const richMansBlock = document.querySelector(".richMans")


const mansBlock = async () => {
    try {
        const response = await fetch("../data/data.json")
        const data = await response.json()
        addEventListener("load", () => {
            data.forEach((person) =>{
                const personCard = document.createElement("div")
                personCard.classList.add("card")
                personCard.innerHTML = `
            <img src="${person.img}" alt="foto">
            <h5>Name: ${person.name}</h5>
            <span>Age: ${person.age}</span>
            <span>Citizenship: ${person.Citizenship}</span>
            <span>Condition: ${person.Condition}</span>
            <span>Source: ${person.Source}</span>
            `
                richMansBlock.append(personCard)
            })
        })
    } catch (e) {
        console.log(e)
    }


}
mansBlock()




