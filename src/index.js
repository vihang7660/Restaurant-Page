let elementButton = document.createElement('button')
let menuButton = document.createElement('button')
let contactButton = document.createElement('button')
let container = document.querySelector('#content')
let body = document.querySelector('body')
let header = document.createElement('div')
header.setAttribute('class', 'header')
body.appendChild(header)


elementButton.textContent = 'Main'
elementButton.setAttribute('class', 'main')
menuButton.textContent = 'Menu'
menuButton.setAttribute('class', 'menu')
contactButton.textContent = 'Contact'
contactButton.setAttribute('class', 'contact')

header.appendChild(elementButton)
header.appendChild(menuButton)
header.appendChild(contactButton)

import {element} from './modules/element'
import {menu} from './modules/menu'
import {contact} from './modules/contact'
import './style.css'



elementButton.addEventListener('click', function() {
    container.textContent = ''
    element()
})

menuButton.addEventListener('click', function() {
    container.textContent = ''
    menu()
})

contactButton.addEventListener('click', function() {
    container.textContent = ''
    contact()
})

element()