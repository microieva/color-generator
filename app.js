const generateHexaColor = () => {
    let string = '0123456789abcdef'
    
    let hexaColor = '#'
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * string.length)
        hexaColor += string[index]
    }
    return hexaColor;

}

const flexContainer = document.querySelector('.flex-container')

for (let i = 0; i < 5; i++) {
    const title = document.createElement('h1')
    const div = document.createElement('div')
    title.textContent = generateHexaColor()
    
    div.style.border = '1px solid #999'
       setInterval(function () {
      
         let bgColor = generateHexaColor()
         title.textContent = bgColor
         if (i %
         2 == 0) {
         div.style.background = bgColor
         } else {
         div.style.background = bgColor
         }
       }, 2000)
   
    div.appendChild(title)
    flexContainer.append(div)
}



