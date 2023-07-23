console.log('main.js connected');

const searchTermsInput = document.body.querySelector("#search-terms");

const getMealCategories = async () => {
    const getMealCategoriesApiURL = "https://www.themealdb.com/api/json/v1/1/categories.php"

    try {
        const response = await fetch(getMealCategoriesApiURL)
        const data = response.json()
       console.log(`data: `, data);
    } catch (error) {
        console.log(error)
        alert('Something went wrong, try again later')
    }
    
}

const handleFormInputFocus = async () => {
    console.log(`focus occurred`);

    await getMealCategories();
};

searchTermsInput.addEventListener('focus', handleFormInputFocus);