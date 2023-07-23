console.log('main.js connected');

const searchTermsInput = document.body.querySelector("#search-terms");

const getMealCategories = async () => {
    const getMealCategoriesApiURL = "https://www.themealdb.com/api/json/v1/1/categories.php"

    await fetch(getMealCategoriesApiURL)
}

const handleFormInputFocus = () => {
    console.log(`focus occurred`);

    getMealCategories();
};

searchTermsInput.addEventListener('focus', handleFormInputFocus);