const buttons = document.querySelectorAll('.button')

const body = document.querySelector("body") 

buttons.forEach((buttons) => {
    console.log(buttons)
 buttons.addEventListener('click', function (event)  {
        console.log(event)
        console.log(event.target)
        if (event.target.id === 'grey') {
            body.style.backgroundColor = "grey"
        }
           if (event.target.id === 'white') {
            body.style.backgroundColor = "white"
        }
            if (event.target.id === 'blue') {
            body.style.backgroundColor = "blue"
        }
            if (event.target.id === 'yellow') {
            body.style.backgroundColor = "yellow"
        }
            if (event.target.id === 'black') {
            body.style.backgroundColor = "black"
        }
    });
});