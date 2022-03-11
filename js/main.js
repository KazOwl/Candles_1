const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const links = document.querySelectorAll('.nav__item')
//const navItems = document.querySelectorAll('.nav__items')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSectuions = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	nav.classList.toggle('nav--active')

	navBtnBars.classList.remove('black-bars-color')
	links.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})
	handleAnimationItems()
}

const handleAnimationItems = () => {
	let delayTime = 0

	links.forEach((item) => {
		item.classList.toggle('nav-animation-items')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const deleteAnimation = () => {
	links.forEach((item) => {
		item.classList.remove('nav-animation-items')
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.textContent = year
}

const handleObserver = () => {
	const currentSection = window.scrollY

	allSectuions.forEach((section) => {
		if (
			section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.add('black-bars-color')
		} else if (
			!section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.remove('black-bars-color')
		}
	})

	if (nav.classList.contains('nav--active')) {
		navBtnBars.classList.remove('black-bars-color')
	}
}

handleCurrentYear()
navBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleObserver)
