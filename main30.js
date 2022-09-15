const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');
let clickTime = 0
let timesClicked = 0


loveMe.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime()
        console.log(clickTime)
    } else {
        if ((new Date().getTime() - clickTime) > 800) {
            createHearth(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }

})

const createHearth = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOfset = e.target.offsetLeft
    const topOfset = e.target.offsetTop

    const xInside = x - leftOfset
    const yInside = y - topOfset

    heart.style.top= `${yInside}px`
    heart.style.left= `${xInside}px`
    loveMe.appendChild(heart)
    times.innerHTML =++timesClicked

    setTimeout(()=> heart.remove(), 1000)

}