let elementButton = document.createElement('button')
let menuButton = document.createElement('button')
let contactButton = document.createElement('button')
let container = document.querySelector('#content')
let body = document.querySelector('body')

elementButton.textContent = 'Main'
menuButton.textContent = 'Menu'
contactButton.textContent = 'Contact'

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