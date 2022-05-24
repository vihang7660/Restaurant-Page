let contact = () => {
    let heading = document.createElement('h1')
    let image = document.createElement('img')
    let container = document.querySelector('#content')
    let box = document.createElement('div')

    heading.textContent = 'Contact'
    image.setAttribute('src', 'https://images01.nicepage.com/page/64/21/website-design-preview-64211.jpg')

    container.appendChild(box)
    box.appendChild(heading)
    box.appendChild(image)
}

export {contact}