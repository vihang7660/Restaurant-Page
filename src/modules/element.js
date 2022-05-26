let element = () => {
    let heading = document.createElement('h1')
    let box = document.createElement('div')
    let info = document.createElement('div')
    info.setAttribute('class', 'info')
    let container = document.querySelector('#content')
    let picture = document.createElement('div')
    picture.setAttribute('class', 'picture')
    let image = document.createElement('img')
    image.setAttribute('src', 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2975%2Ftrend20201030124515.jpg')
    let heading1 = document.createElement('h2')
    heading1.setAttribute('class', 'heading1')
    let para = document.createElement('p')
    para.setAttribute('class', 'para')
    let heading2 = document.createElement('h3')
    heading2.setAttribute('class', 'heading2')

    heading.textContent = 'My Restaurant'
    heading1.textContent = 'Good Food, Made Well..'
    para.textContent = 'A dining experience like no other, whether enjoying a glass of wine while taking in the picturesque views or enjoying a quiet meal with friends and family, you can be sure your visit will be unforgettable.'
    heading2.textContent = 'padharo kabhi hamare yaha'

    container.appendChild(box)
    box.appendChild(heading)
    box.appendChild(info)
    info.appendChild(heading1)
    info.appendChild(picture)
    picture.appendChild(image)
    info.appendChild(para)
    info.appendChild(heading2)
}

export {element}