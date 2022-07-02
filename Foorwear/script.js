const slides = document.querySelectorAll('.slide');
const slidecontainer = document.getElementById('slide-container');
const left = document.getElementById('left')
const right = document.getElementById('right')

const Slides_count = slides.length

let current_slide = 0

const update = () => {
    slidecontainer.style.transform = `translateX(${-current_slide * slides[0].offsetWidth
        }px)`;

    document.body.style.background = `#${slides[current_slide].getAttribute(
        "data-bg"
    )}`;
}
left.addEventListener('click', () => {
    console.log("LEft", current_slide)

    if (current_slide == 0) {
        current_slide = Slides_count - 1
    } else {
        current_slide--;
    }
    update()
})
right.addEventListener('click', () => {
    console.log("Right", current_slide)
    if (current_slide == Slides_count - 1) {
        current_slide = 0
    } else {
        current_slide++;
    }
    update()
})
