// PHONE CHECKER

// DOM - document object model

const phoneInput = document.querySelector("#phone_input")
const phoneCheck = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/


phoneCheck.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "OK"
        phoneResult.style.color = "green"

    } else {
        phoneResult.innerHTML = "NOT OK"
        phoneResult.style.color = "red"

    }
}
// TAB SLAIDER

const tabContent = document.querySelectorAll(".tab_content_block");
const tabs = document.querySelectorAll(".tab_content_item");
const tabsParent = document.querySelector(".tab_content_items");

const hideTabContent = () => {
    tabContent.forEach((item) =>{
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tab_content_item_active")
    })
}
const showTabContent = (index = 0) => {
    tabContent[index].style.display = "block";
    tabs[index].classList.add("tab_content_item_active")

}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains("tab_content_item")){
        tabs.forEach((item, i) => {
            if (event.target === item){
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}

const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabContent.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 7000)
}
autoSlider()


//Convert
// DRY - don`t repeat yourself
// KISS - keep it short snd simple

const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const eur = document.querySelector("#eur")

const convertor = ( element, target, target2, elementName) => {
    element.oninput = async () => {
        try {
            const response = await fetch('../data/convertor.json')
            const data = await response.json()
            switch (elementName) {
                case "som":
                    target.value = (element.value * data.som / data.usd).toFixed(2)
                    target2.value = (element.value * data.som / data.eur).toFixed(2)
                    break
                case "usd":
                    target.value = (element.value * data.usd / data.som).toFixed(2)
                    target2.value = (element.value * data.usd / data.eur).toFixed(2)
                    break
                case "eur":
                    target.value = (element.value * data.eur / data.som).toFixed(2)
                    target2.value = (element.value * data.eur / data.usd).toFixed(2)
                    break
            }
            if (element.value === ""){
                target.value = ""
                target2.value = ""
            }
        } catch (e) {
            alert(e, "Error")
        }
    }
}
// const convertor = (element, target, target2, elementName) => {
//     element.oninput = () => {
//         const request = new XMLHttpRequest()
//         request.open("GET", "../data/convertor.json")
//         request.setRequestHeader("Content-type", "application/json")
//         request.send()
//
//         request.onload = () => {
//             const respons = JSON.parse(request.response)
//             switch (elementName) {
//                 case "som":
//                     target.value = (element.value * respons.som / respons.usd).toFixed(2)
//                     target2.value = (element.value * respons.som / respons.eur).toFixed(2)
//                     break
//                 case "usd":
//                     target.value = (element.value * respons.usd / respons.som).toFixed(2)
//                     target2.value = (element.value * respons.usd / respons.eur).toFixed(2)
//                     break
//                 case "eur":
//                     target.value = (element.value * respons.eur / respons.som).toFixed(2)
//                     target2.value = (element.value * respons.eur / respons.usd).toFixed(2)
//                     break
//             }
//             // if(element.value === ""){
//             //     target.value = ""
//             //     target2.value = ""
//             // }
//             // if (istru) {
//             //     target.value = (element.value / respons.usd).toFixed(2)
//             //     target2.value = (element.value / respons.eur).toFixed(2)
//             // } else {
//             //     target.value = (element.value * respons.usd).toFixed(2)
//             //     target2.value = (element.value * respons.eur).toFixed(2)
//             // }
//             // element.value === "" ? target.value = "":""
//         }
//     }
// }
convertor(som, usd, eur, "som")
convertor(usd, som, eur, "usd")
convertor(eur, som, usd, "eur")

// som.addEventListener("input", () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "../data/convertor.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//     request.addEventListener("load",() => {
//         const respons = JSON.parse(request.response)
//         usd.value = (som.value / respons.usd).toFixed(2)
//     })
// })
// usd.addEventListener("input", () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "../data/convertor.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//     request.addEventListener("load",() => {
//         const respons = JSON.parse(request.response)
//         som.value = (usd.value * respons.usd).toFixed(2)
//     })
// })

//Cad Switcher

const card = document.querySelector(".card")
const btnPrev = document.querySelector("#btn-prev")
const btnNext = document.querySelector("#btn-next")
let count = 1

const countData = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        const data = await response.json()
        card.innerHTML = `
        <p>${data.title}</p>
        <p style="color: ${data.completed ? "green" : "red"}">${data.completed}</p>
        <span>${data.id}</span>
        `
    } catch (e){
        console.log(e, "Error")
    }
}
// // const countData = () => {
// //     fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
// //         .then((response) => response.json())
// //         .then((data) => {
// //             card.innerHTML = `
// //             <p>${data.title}</p>
// //             <p style="color: ${data.completed ? "green" : "red"}">${data.completed}</p>
// //             <span>${data.id}</span>
// //              `
// //         })
// // }

btnNext.onclick = () => {
    if (count < 200 ? count++ : count = 1)
    countData()
}
btnPrev.onclick = () => {
    if (count <= 1 ? count = 200 : count --)
    countData()
}

// setInterval(() => {
//     if (count < 200){
//         count ++
//     } else {
//         count = 1
//     }
//     countData()
// }, 4000)
countData()

const asyncAwait = async () => {
    try {
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts?_limit=50")
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}


const cityName = document.querySelector(".cityName")
const city = document.querySelector(".city")
const temp = document.querySelector(".temp")

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather'
const apiKey = 'e417df62e04d3b1b111abeab19cea714'

cityName.oninput = async (event) => {
    try {
        const response = await fetch(`${baseUrl}?q=${event.target.value}&appid=${apiKey}`)
        const data = await response.json()
        city.innerHTML = data?.name ? data.name : "Город не найден..."
        temp.innerHTML = data?.main?.temp ? Math.round (data?.main?.temp - 271) + '&deg;C' : "..."
    } catch (e) {
        alert(e, "ERROR")
    }
}
