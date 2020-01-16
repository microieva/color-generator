

const bottomContainer = document.querySelector('.bottom-container')
const generateButton = document.querySelector('.button-generate')
const stopButton = document.querySelector('.button-stop')
const input = document.querySelector('.input')
        
const generateHexaColor = () => {
    let string = '0123456789abcdef'
    let hexaColor = '#'
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * string.length)
        hexaColor += string[index]
    }
    return hexaColor
}

const run = (j=5) => {
    for (let i = 0; i < j; i++) {
        const title = document.createElement('h2')
        const div = document.createElement('div')
        const copyButton = document.createElement('button')

        title.style.margin = '10rem'
        copyButton.textContent = 'Copy'
        copyButton.style.backgroundColor = "lightgrey"
        copyButton.style.margin = '10rem'
                    
        div.appendChild(title)
        div.appendChild(copyButton)
        bottomContainer.append(div)

        const interval = setInterval(() => {
            let generatedColor = generateHexaColor();
            title.textContent = generatedColor;
            div.style.background = generatedColor;        
        }, 2000)

        stopButton.addEventListener('click', () => {
            clearInterval(interval);
        })  

        copyButton.addEventListener('click', () => {
            let code = title.textContent;
            let textArea = document.createElement('input');
            textArea.value = code;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy')
            console.log(code)
            textArea.remove();
        })
                
        copyButton.addEventListener('mouseover', () => {
            clearInterval(interval);
        })
                
        copyButton.addEventListener('mouseout', () => {
            bottomContainer.textContent = '';
            run()
                    
        })
    }
}

const errorMsg = () => {
    const errorMsg = document.querySelector('p');
    errorMsg.textContent = "The number must be greater than 5"
    errorMsg.style.color = "red"
    document.getElementById('div-ui').appendChild(errorMsg)
    run(5);
    return errorMsg;
}
        
generateButton.addEventListener('click', () => {    
    bottomContainer.textContent = '';

    if (input.value > 5) {
        run(input.value)
    } else if (input.value == null) {
        run(5)
    } else if (input.value < 5 || input.value == NaN) {
        alert("Must be a number greater than 5")
        run(5)
    }
    input.value = null;

    // switch(inputValue) {
    //     case inputValue < 5:
    //         alert("The number must be greater than 5");
    //         inputValue = null;
    //         run(5);
    //         break;
    //     case inputValue > 5:
    //         run(inputValue);
    //         inputValue = null;
    //         break;
    //     default:
    //         run(5) 
    //         break;
    // }
        
})
               
run();