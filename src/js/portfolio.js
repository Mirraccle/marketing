const { default: Swiper } = require("swiper")

let navItems = document.querySelectorAll('.portfolio-nav__item')
let partnerLists = document.querySelectorAll('.partners-list')
let partners = document.querySelectorAll('.partner')
let portfolioNames = document.querySelectorAll('.portfolio-name')
let sliderBlock = document.querySelector('.slider-block')
let brandBlock = document.querySelector('.brandbook-block')
let styleBlock = document.querySelector('.style-block')
let motionBlock = document.querySelector('.motion-block')
let websitePic = document.querySelectorAll('.website-pic')
let blocks = document.querySelectorAll('.block')
let myArray = [partners, portfolioNames]
function hideContent(type, logo, array, block) {
    type.forEach(element => {
        if (element.classList.contains('active')) {
            element.classList.remove('active')
        }
    })
    logo.forEach(partner => {
        if (partner.classList.contains('active')) {
            partner.classList.remove('active')
        }
    })
    block.forEach(element => {
        if (element.classList.contains('active')) {
            element.classList.remove('active')
        }
    })
}

function showContent(type, logo, array, block) {
    logo.forEach(partner => {
        if (partner.getAttribute('data-filter') === type) {
            partner.classList.add('active')
        }
    })

    

    block.forEach(partner => {
        if (partner.getAttribute('data-filter') === type) {
            partner.classList.add('active')
        }
    })
}

navItems.forEach(tab => {
    tab.addEventListener('click', event => {
        hideContent(navItems, partnerLists, myArray, blocks)
        tab.classList.add('active')
        let type = tab.getAttribute('data-filter')
        showContent(type, partnerLists, myArray, blocks)
    })
})


function hideSlider (partners, names, picture) {
    partners.forEach(partner => {
        if (partner.classList.contains('active')) {
            partner.classList.remove('active')
        }
    })
    names.forEach(name => {
        if (name.classList.contains('active')) {
            name.classList.remove('active')
        }
    })
    picture.forEach(picture => {
        if (picture.classList.contains('active')) {
            picture.classList.remove('active')
        }
    })
}

function showSlider (type, names, picture) {
    names.forEach(name => {
        if (name.getAttribute('data-filter') === type) {
            name.classList.add('active')
        }
    })
    picture.forEach(picture => {
        if (picture.getAttribute('data-filter') === type) {
            picture.classList.add('active')
        }
    })
}

partners.forEach(element => {
    element.addEventListener('click', event => {
        hideSlider(partners, portfolioNames, websitePic)
        element.classList.add('active')
        let type = element.getAttribute('data-filter')
        showSlider(type, portfolioNames, websitePic)
    })
})





//website
// let portfolioSlider = new Swiper('.portfolio-slider', {
//     centeredSlides: true,
//     slidesPerView: 3,
//     spaceBetween: 50,
//     initialSlide: 1,
//     slideToClickedSlide: true,
// })

// function changeSlides (planshet, laptop, phone, photo1, photo2, photo3) {
//     planshet.setAttribute('src', photo1)
//     laptop.setAttribute('src', photo2)
//     phone.setAttribute('src', photo3)
// }

// let planshet = document.querySelector('#planshet')
// let laptop = document.querySelector('#laptop')
// let phone = document.querySelector('#phone')

let websitePangolin = document.querySelector('#website-pangolin')
let websiteBuilding = document.querySelector('#website-building')
let websiteSpina = document.querySelector('#website-spina')
let websiteElephant = document.querySelector('#website-elephant')

// let websitePangolinPhoto1 = 'images/content/portfolio/images/pangolin1.png'
// let websitePangolinPhoto2 = 'images/content/portfolio/images/pangolin2.png'
// let websitePangolinPhoto3 = 'images/content/portfolio/images/pangolin3.png'

// let websiteBuildingPhoto1 = 'images/content/portfolio/images/bandp1.png'
// let websiteBuildingPhoto2 = 'images/content/portfolio/images/bandp2.png'
// let websiteBuildingPhoto3 = 'images/content/portfolio/images/bandp3.png'

// let websiteSpinaPhoto1 = 'images/content/portfolio/images/spina1.png'
// let websiteSpinaPhoto2 = 'images/content/portfolio/images/spina2.png'
// let websiteSpinaPhoto3 = 'images/content/portfolio/images/spina3.png'

// let websiteElephantPhoto1 = 'images/content/portfolio/images/elephant1.png'
// let websiteElephantPhoto2 = 'images/content/portfolio/images/elephant2.png'
// let websiteElephantPhoto3 = 'images/content/portfolio/images/elephant3.png'

// websitePangolin.addEventListener('click', event => {
//     changeSlides(planshet, laptop, phone, websitePangolinPhoto1, websitePangolinPhoto2, websitePangolinPhoto3)
// })
// websiteBuilding.addEventListener('click', event => {
//     changeSlides(planshet, laptop, phone, websiteBuildingPhoto1, websiteBuildingPhoto2, websiteBuildingPhoto3)
// })
// websiteSpina.addEventListener('click', event => {
//     changeSlides(planshet, laptop, phone, websiteSpinaPhoto1, websiteSpinaPhoto2, websiteSpinaPhoto3)
// })
// websiteElephant.addEventListener('click', event => {
//     changeSlides(planshet, laptop, phone, websiteElephantPhoto1, websiteElephantPhoto2, websiteElephantPhoto3)
// })

//Firm styles
let styleKira = document.querySelector('#style-kira')
let styleMc = document.querySelector('#style-mc')
let styleTurin = document.querySelector('#style-turin')
let styleSpina = document.querySelector('#style-spina')

let styleBlocks = document.querySelectorAll('.style-holder')

function showStyle (blocks, type) {
    blocks.forEach(block => {
        if (block.getAttribute('data-filter') === type) {
            block.classList.add('active')
        }
    })
}

function hideStyle (blocks) {
    blocks.forEach(block => {
        if (block.classList.contains('active')) {
            block.classList.remove('active')
        }
    })
}

styleKira.addEventListener('click', event => {
    hideStyle(styleBlocks)
    let type = styleKira.getAttribute('data-filter')
    showStyle(styleBlocks, type)
})

styleMc.addEventListener('click', event => {
    hideStyle(styleBlocks)
    let type = styleMc.getAttribute('data-filter')
    showStyle(styleBlocks, type)
})

styleTurin.addEventListener('click', event => {
    hideStyle(styleBlocks)
    let type = styleTurin.getAttribute('data-filter')
    showStyle(styleBlocks, type)
})

styleSpina.addEventListener('click', event => {
    hideStyle(styleBlocks)
    let type = styleSpina.getAttribute('data-filter')
    showStyle(styleBlocks, type)
})