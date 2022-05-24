let menu = () => {
    let heading = document.createElement('h1')
    let image = document.createElement('img')
    let container = document.querySelector('#content')
    let box = document.createElement('div')

    heading.textContent = 'Menu'
    image.setAttribute('src', 'https://img.freepik.com/free-vector/creative-restaurant-menu-digital-use-with-photo_52683-45622.jpg?w=2000')

    container.appendChild(box)
    box.appendChild(heading)
    box.appendChild(image)
}

export {menu}