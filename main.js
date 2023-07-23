console.log('main.js connected');

const searchTermsInput = document.body.querySelector("#search-terms");


const handleFormInputFocus = () => {
    console.log(`focus occurred`)
};

searchTermsInput.addEventListener('focus', handleFormInputFocus);