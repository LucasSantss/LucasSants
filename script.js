
gsap.registerPlugin(ScrollTrigger)

gsap.from('.logo div', {
    opacity: 0,
    delay: 1,
    x: 20
})

const menu_items = document.querySelector('.menu-items')
gsap.from(menu_items.children, {
    opacity: 0,
    x: 0,
    duration: 1,
    delay: 1.5,
    stagger: {
        amount: 1
    },
})

const tecs = document.querySelector('.tecs')
gsap.from(tecs.children, {
    opacity: 0,
    x: 0,
    duration: 1,
    delay: 1.5,
    stagger: {
        amount: 1
    },
})


gsap.utils.toArray('.title').forEach(title => {
    gsap.fromTo(title, {
        opacity: 0,
        x: -100,
        skewX: -65
    }, {
        letterSpacing: '0',
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 1,
        delay: .5,
        scrollTrigger: title
    })
})

gsap.utils.toArray('p').forEach(p => {
    gsap.fromTo(p, {
        opacity: 0,
        x: -150,
        skewX: 30
    }, {
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 1,
        delay: .5,
        scrollTrigger: p

    })
})


gsap.utils.toArray('button').forEach(button => {
    gsap.fromTo(button, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1,
        delay: 1,
        scrollTrigger: button

    })
})


gsap.from('.pyramid', {
    opacity: 0,
    scale: .5,
    duration: 1,
    delay: .5
})

gsap.utils.toArray('.blink').forEach(line => {
    gsap.fromTo(line, {
        opacity: 0,
        x: -100
    }, {
        opacity: 0.5,
        x: 0,
        duration: 1,
        delay: 1.5,
        scrollTrigger: line

    })
})


gsap.fromTo('.hand', {
    scale: .2,
    opacity: 0,
    skewY: -20,
}, {
    scale: 1,
    opacity: 1,
    skewY: 0,
    duration: 1,
    delay: .5,
    scrollTrigger: '.hand'
})



gsap.utils.toArray('.line').forEach(line => {
    gsap.fromTo(line, {
        opacity: 0,
        width: '0%'
    }, {
        opacity: 1,
        width: '100%',
        duration: 1,
        delay: 1,
        scrollTrigger: line

    })
})


gsap.fromTo('.card', {
    opacity: 0,
    scale: .5,
}, {
    opacity: 1,
    scale: 1,
    duration: 1,
    delay: .5,
    stagger: {
        amount: 1
    },
    scrollTrigger: '.card'
})

const menu = document.querySelector('.menu')
gsap.from(menu.children, {
    opacity: 0,
    x: -50,
    duration: 1,
    delay: .5,
    stagger: {
        amount: 1
    },
    scrollTrigger: {
        trigger: menu.children
    }
})


const projects = document.querySelectorAll('.projects');
const sidebar = document.querySelector('.projects');
const cards = document.querySelectorAll('.card');
const nxtBtn = document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');

projects.forEach((item, i) => {
    let containerDimencao = item.getBoundingClientRect();
    let containerWidth = containerDimencao.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

//navbar @media
const menu_btn = document.querySelector('.logo');
const nav = document.querySelector('.nav-bar');

menu_btn.addEventListener('click', () => {
    nav.classList.toggle('active');
})