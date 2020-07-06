
const bottomContainer = document.querySelector('.bottom-container')
const generateButton = document.querySelector('.button-generate')
const stopButton = document.querySelector('.button-stop')
const input = document.querySelector('.input')
const msg = document.querySelector('.msg')
const spam = document.createElement('spam')

spam.textContent = "Please choose a number greater than 5!"

//returns random generated id
const generateHexaColor = () => {
    let string = "0123456789abcdef"
    let hexaColor = "#"
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * string.length)
        hexaColor += string[index]
    }
    return hexaColor
}

//running 
const run = (j=5) => {
    for (let i = 0; i < j; i++) {
        
        const div = document.createElement('div')
        const title = document.createElement('h3')
        const copyButton = document.createElement('button')

        copyButton.textContent = 'Copy'
        copyButton.style.backgroundColor = 'lightgrey'
        

        
        bottomContainer.append(div)
        div.appendChild(title)
        div.appendChild(copyButton)

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
        spam.style.color = 'red'
        spam.style.visibility = 'visible'
        msg.insertBefore(spam, msg.firstChild)
        run(5)
        input.value = "";
    } else {  
        if (spam.style.visibility = 'visible') {
            spam.style.visibility = 'hidden'
        }  
        run(input.value)
    }  
    input.value = "";
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
        document.execCommand('copy');
        copyButton.textContent = "Copied!"
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
        run();
                    
    })
}

//runs initial session!
run();