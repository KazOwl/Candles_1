const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const links = document.querySelectorAll('.nav__item')

const handleNav = () => {
	nav.classList.toggle('nav--active')

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
navBtn.addEventListener('click', handleNav)
