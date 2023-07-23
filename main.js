console.log('main.js connected');

const searchTermsInput = document.body.querySelector("#search-terms");

const getMealCategories = async () => {
    const getMealCategoriesApiURL = "https://www.themealdb.com/api/json/v1/1/categories.php"

    const response = await fetch(getMealCategoriesApiURL)

    const data = response.json()
}

const handleFormInputFocus = async () => {
    console.log(`focus occurred`);

    await getMealCategories();
};

searchTermsInput.addEventListener('focus', handleFormInputFocus);