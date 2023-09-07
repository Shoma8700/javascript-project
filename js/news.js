const newsBlock = document.querySelector(".newsBlock")
const newsCards = async () => {
    try {
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts?_limit=50")
    const data = await response.json()
        data.forEach((news) => {
            const cards = document.createElement("div")
            cards.classList.add("cards")
            cards.innerHTML = `
            <img src="https://th.bing.com/th/id/OIP.pRbsW1f8W7_GDBBRdhD0OQHaEK?pid=ImgDet&rs=1" alt="">
            <h5>${news.title}</h5>
            <p>${news.body}</p>
            `
            newsBlock.append(cards)
        })

        console.log(data)
    } catch (e){
        alert(e,"Error")
    }
}
newsCards()