let elementButton = document.createElement('button')
let menuButton = document.createElement('button')
let contactButton = document.createElement('button')
let container = document.querySelector('#content')
let body = document.querySelector('body')

elementButton.textContent = 'Main'
elementButton.setAttribute('class', 'main')
menuButton.textContent = 'Menu'
menuButton.setAttribute('class', 'menu')
contactButton.textContent = 'Contact'
contactButton.setAttribute('class', 'contact')

body.appendChild(elementButton)
body.appendChild(menuButton)
body.appendChild(contactButton)

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