let menu = () => {
    let heading = document.createElement('h1')
    let container = document.querySelector('#content')
    let box = document.createElement('div')
    let menuInfo = document.createElement('div')
    menuInfo.setAttribute('class', 'menuInfo')
    for (let i = 0; i < 8; i++) {
        let foodItem = document.createElement('div')
        foodItem.setAttribute('class', 'foodItem')
        menuInfo.appendChild(foodItem)
        let foodPic = document.createElement('div')
        foodPic.setAttribute('class', 'foodPic')
        let foodInfo = document.createElement('div')
        foodItem.appendChild(foodPic)
        foodItem.appendChild(foodInfo)
        foodInfo.setAttribute('class', 'foodInfo')
        if (i == 0) {
            let foodpicture = document.createElement('img')
            foodpicture.setAttribute('src', 'https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg')
            foodPic.appendChild(foodpicture)
            foodInfo.textContent = 'Pizza : $10'
        }
        else if (i == 1) {
            let foodpicture = document.createElement('img')
            foodpicture.setAttribute('src', 'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg')
            foodPic.appendChild(foodpicture)
            foodInfo.textContent = 'Hamburger : $8'
        }
        else if (i == 2) {
            let foodpicture = document.createElement('img')
            foodpicture.setAttribute('src', 'https://www.chefspencil.com/wp-content/uploads/Chole-Bhature.jpg')
            foodPic.appendChild(foodpicture)
            foodInfo.textContent = 'Chole Bhature - $15'
        }
        else if (i ==3) {
            let foodpicture = document.createElement('img')
            foodpicture.setAttribute('src', 'https://static.toiimg.com/thumb/63841432.cms?width=1200&height=900')
            foodPic.appendChild(foodpicture)
            foodInfo.textContent = 'Masala Dosa : $8'

        }
        else if (i == 4) {
            let foodpicture = document.createElement('img')
            foodpicture.setAttribute('src', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/pav-bhaji.jpg')
            foodPic.appendChild(foodpicture)
            foodInfo.textContent = 'Paav Bhaji : $7'
        }
        else if (i == 5) {
            let foodpicture = document.createElement('img')
            foodpicture.setAttribute('src', 'https://www.thespruceeats.com/thmb/A_g1pdGtPZBJyJ9ycu18iDzegL4=/1887x1415/smart/filters:no_upscale()/idli-56a510b63df78cf772862c34.jpg')
            foodPic.appendChild(foodpicture)
            foodInfo.textContent = 'Idli : $5'
        }
        else if (i == 6) {
            let foodpicture = document.createElement('img')
            foodpicture.setAttribute('src', 'https://cdn.cdnparenting.com/articles/2020/03/31120805/White-Dhokla-Recipe.jpg')
            foodPic.appendChild(foodpicture)
            foodInfo.textContent = 'Dhokla : $6'
        }
        else if (i == 7) {
            let foodpicture = document.createElement('img')
            foodpicture.setAttribute('src', 'https://static.toiimg.com/photo/55432577.cms')
            foodPic.appendChild(foodpicture)
            foodInfo.textContent = 'Dahi Vada : $6'
        }
    }

    heading.textContent = 'Menu'

    container.appendChild(box)
    box.appendChild(heading)
    box.appendChild(menuInfo)
}

export {menu}