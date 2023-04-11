import {flowers} from "../data/flowers.js"
//console.log(flowers)

//grab the html references
const myNav = document.querySelector('nav')
const myViewer = document.querySelector('#viewer')


//nav items 
flowers.forEach(flower => {
    //console.log(flower)
    const myButton = document.createElement('button')
    myButton.textContent = flower.title
    myButton.addEventListener('click', () => showFlower(flower))
    myNav.appendChild(myButton)
})

function showFlower(flower) {
    console.log(flower)

    let flowerSection = document.createElement ("section")
    let flowerName= document.createElement ("h2")
    let flowerPhoto= document.createElement ("img")
    let flowerPrice = document.createElement ("p")
    let flowerDescription = document.createElement ('p')
    let flowerColorsName = document.createElement('p')
    let flowerColors = document.createElement ("url")
    

    flowerName.textContent = flower.title
    flowerPhoto.src = `images/${flower.photo}`
    flowerPhoto.alt = flower.first
    flowerPrice.textContent = `Price: ${flower.price}`
    flowerDescription.textContent = `Description: ${flower.description}`
    flowerColorsName.textContent = `Colors: `

    flower.colors.forEach(color => {
        //console.log(color)
        let theColor = document.createElement('li')
        theColor.textContent = color
        flowerColors.appendChild(theColor)
    })
    flowerSection.appendChild(flowerName)
    flowerSection.appendChild(flowerPhoto)
    flowerSection.appendChild(flowerPrice)
    flowerSection.appendChild(flowerDescription)
    flowerSection.appendChild(flowerColorsName)
    flowerSection.appendChild(flowerColors)
    myViewer.textContent = ""
    myViewer.appendChild(flowerSection)


} //end