
const scrollToSections = (optionsData, targetSelector) => {

	const links = document.querySelectorAll(targetSelector || 'a[href^="#"]')
	const { block, behavior, inline } = optionsData
	const options = {
		block: block || 'start',
		behavior: behavior || 'smooth',
		inline: inline || 'nearest' 
	}

links.forEach(link => {
	link.addEventListener('click', evt => {
		evt.preventDefault()
		const targetSectionSelector = link.getAttribute('href')

		if (targetSectionSelector !== '#') {
			const targetSection = document.querySelector(targetSectionSelector)
			if (typeof seamless !== 'undefined') {
				seamless.polyfill()
				seamless.elementScrollIntoView(targetSection, options)
			}else {
				targetSection.scrollIntoView(options)
			}
		}else {
			console.warn('Секция: ' + '"' + link.textContent + '"' + ' не найдена')
		}
	})
})}

scrollToSections({
	behavior: 'smooth',
	block: 'start',
	inline: 'center'
})

// npm install seamless-scroll-polyfill --save
// <script src="https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@latest/lib/bundle.min.js" defer></script>

// behavior Необязательный
// Определяет анимацию скролла. Принимает значение "auto" или "smooth". По умолчанию "auto".
// block Необязательный
// Вертикальное выравнивание.
// Одно из значений: "start", "center", "end" или "nearest". По умолчанию "start".
// inline Необязательный
// Горизонтальное выравнивание.
// Одно из значений: "start", "center", "end" или "nearest". По умолчанию "nearest"