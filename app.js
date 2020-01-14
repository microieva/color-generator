const generateHexaColor = () => {
    let string = '0123456789abcdef'
    
    let hexaColor = '#'
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * string.length)
        hexaColor += string[index]
    }
    return hexaColor;

}


for (let i=0; i<5; i++) {
    console.log(generateHexaColor())
    const div = document.createElement('div');
    div.style.backgroundColor = generateHexaColor();
    div.textContent = generateHexaColor();
}



