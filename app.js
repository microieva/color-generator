
const bottomContainer = document.querySelector('.bottom-container')
const generateButton = document.querySelector('.button-generate')
const stopButton = document.querySelector('.button-stop')
const input = document.querySelector('.input')

//returns random generated id
const generateHexaColor = () => {
    let string = '0123456789abcdef'
    let hexaColor = '#'
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * string.length)
        hexaColor += string[index]
    }
    return hexaColor
}

//running 
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

        stop(interval);
        copy(copyButton, title);
        mouseOver(copyButton, interval);
        mouseOut(copyButton);        
    }
}

// USER ACTIONS (generate, stop, copy, mouse over, mouse out)
generateButton.addEventListener('click', () => {    
    bottomContainer.textContent = '';

    if (input.value == "") {
        run()
    } else if (input.value < 5 ) {
        alert("Must be a number greater than 5")
        run()
        input.value = null;
        errorMsg = document.querySelector('p');
    } else {    
        run(input.value)
    }  
    input.value = null;
})

const stop = (interval) => {
    stopButton.addEventListener('click', () => {
        clearInterval(interval);
    })  
} 

const copy = (copyButton, title) => {
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
}

const mouseOver = (copyButton, interval) => {
    copyButton.addEventListener('mouseover', () => {
        clearInterval(interval);
    })
}

const mouseOut = (copyButton) => {
    copyButton.addEventListener('mouseout', () => {
        bottomContainer.textContent = '';
        run()            
    })
}

//runs initial session
run();