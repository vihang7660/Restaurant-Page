let contact = () => {
    let heading = document.createElement('h1')
    let container = document.querySelector('#content')
    let box = document.createElement('div')

    heading.textContent = 'Contact Us'

    
    container.appendChild(heading)
    container.appendChild(box)

    box.setAttribute('class', 'contactBox')

    box.innerText = `Hours:
    10:00AM - 10:00PM
    7 Days a Week
    
    Manhattan, Old New York`
}

export {contact}