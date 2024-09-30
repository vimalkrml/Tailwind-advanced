const nav = document.getElementById('nav_bar')
const header = document.getElementById('header');
const form = document.getElementById('form_data');
const left_nav = document.getElementById('nav_left');
const right_nav = document.getElementById('nav_right');
const mainbody = document.getElementById('main_body');


const options = {}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            right_nav.classList.remove('nav_right ')
        }
        else {
            right_nav.classList.add('nav_right ')
            console.log('interscet')
        }
    })
}, options)

const newObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            nav.classList.remove('changecolour')
        }
        else {
            nav.classList.add('changecolour')
            console.log('interscet')
        }
    })
}, options)

newObserver.observe(header)
observer.observe(form)