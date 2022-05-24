let element = () => {
    let heading = document.createElement('h1')
    let image = document.createElement('img')
    let box = document.createElement('div')
    let container = document.querySelector('#content')

    heading.textContent = 'My Restaurant'
    image.setAttribute('src', 'https://sayajihotels.com/images/hotels/sayaji-indore/dining/mediterra/img1.jpg')

    container.appendChild(box)
    box.appendChild(heading)
    box.appendChild(image)
}

export {element}