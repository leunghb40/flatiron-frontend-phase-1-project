console.log('main.js connected')

const handleFormInputFocus = () => {
    console.log(`focus occurred`)
}

document.body.querySelector("#search-terms")

document.body.addEventListener('focus', handleFormInputFocus)