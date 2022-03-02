const nextBtn = document.querySelector('#nextBtn'),
      prevBtn = document.querySelector('#prevBtn')

let carousel = document.querySelector('#carousel'),
    slides = document.querySelectorAll('.slideContent'),
    width = slides[0].getBoundingClientRect().width,
    images = document.querySelectorAll('.slideContent > img'),
    count = slides.length,
    currentSlide = 1


carousel.style.height = `${images[currentSlide].clientHeight}px`

carousel.style.transform = (`translateX(${-width * currentSlide}px)`)

function next(){
    if(event.keyCode == 39 || event.keyCode == undefined){
        if(currentSlide == count-1) return
        carousel.style.transition = "transform ease-in-out .6s"
        currentSlide++
        carousel.style.transform = (`translateX(${-width * currentSlide}px)`)
    }
}

function prev(){
    if(event.keyCode == 37 || event.keyCode == undefined){
        if(currentSlide == 0) return
        carousel.style.transition = "transform ease-in-out .6s"
        currentSlide--
        carousel.style.transform = (`translateX(${-width * currentSlide}px)`)
    }
}

function lastSlides(){
    if(slides[currentSlide].id == 'lastCopy'){
        carousel.style.transition = "transform 0s"
        
        currentSlide = count-2
        carousel.style.transform = (`translateX(${-width * currentSlide}px)`)

    }else if(slides[currentSlide].id == 'firstCopy'){
        carousel.style.transition = "transform 0s"

        currentSlide = count - currentSlide
        carousel.style.transform = (`translateX(${-width * currentSlide}px)`)
    }
}

function resizeSlide(){
    width = slides[0].getBoundingClientRect().width
    carousel.style.transform = (`translateX(${-width * currentSlide}px)`)
    carousel.style.height = `${images[currentSlide].clientHeight}px`
}


nextBtn.addEventListener('click', next)
carousel.addEventListener('mouseover', ()=>{
    document.addEventListener('keydown', next)
    document.addEventListener('keydown', prev)
})
carousel.addEventListener('mouseout', ()=>{
    document.removeEventListener('keydown', next)
    document.removeEventListener('keydown', prev)
})

// prevBtn.addEventListener('click', prev)
prevBtn.addEventListener('click', prev)
carousel.addEventListener('transitionend', lastSlides)

window.addEventListener('resize', resizeSlide)

function teste(){
    carousel.style.transition = "transform 0s"
    carousel.style.transform = (`translateX(${-width * currentSlide}px)`)
}