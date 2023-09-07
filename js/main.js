// RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll('.btn-color')
const javaScript = document.querySelector('#js-color')

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {
        buttonColor.innerHTML = generateRandomColor()
        buttonColor.onclick = (event) => javaScript.style.color = event.target.innerHTML
    })
}

window.onload = () => setRandomColors()
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        setRandomColors()
    }
}

// SLIDER BLOCK

const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let index = 0

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0
        slide.classList.remove('active_slide')
    })
}
const showSlide = (i = 0) => {
    slides[i].style.opacity = 1
    slides[i].classList.add('active_slide')
}

hideSlide()
showSlide(index)


const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > slides.length - 1) {
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 10000)
}

next.onclick = () => {
    index < slides.length - 1 ? index++ : index = 0
    hideSlide()
    showSlide(index)
}

prev.onclick = () => {
    index > 0 ? index-- : index = slides.length - 1
    hideSlide()
    showSlide(index)
}

autoSlider(index)


//PROMISE

const promiseVariable = new Promise((resolve) => {
    return setTimeout(() => {
        const product = {
            name:"Milk",
            price:"$5"
        }
        console.log(`Product: ${product.name}\nPrice: ${product.price}\n1 step`)
        resolve(product)
    }, 1000)
})
//
// const resolveData = (product) => {
//     return setTimeout(() =>{
//         product.price = "$8"
//         console.log(`Product: ${product.name}\nPrice: ${product.price}\n2 step`)
//     }, 3000)
// }
// promiseVariable.then(resolveData)

promiseVariable.then((product) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            product.price = "$8"
            console.log(`Product: ${product.name}\nPrice: ${product.price}\n2 step`)
            resolve(product)
        }, 3000)
    })
}).then((product) => {
    return setTimeout(() => {
        product.name = "Cheese"
        console.log(`Product: ${product.name}\nPrice: ${product.price}\n3 step`)
    }, 2000)

})