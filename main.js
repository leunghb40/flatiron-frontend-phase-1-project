const fetchImageButton = document.getElementById('fetch-image-btn');
const dogImageElement = document.getElementById('dog-image');
const breedElement = document.getElementById('breed');
const descriptionElement = document.getElementById('description');

fetchImageButton.addEventListener('click', fetchRandomDogImage);
dogImageElement.addEventListener('click', showBreedDetails);

function fetchRandomDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.message;
      dogImageElement.src = imageUrl;
      breedElement.textContent = '';
      descriptionElement.textContent = '';
    })
    .catch(error => {
      console.error('Error:', error);
      dogImageElement.src = '';
      breedElement.textContent = 'Failed to fetch a random dog image.';
      descriptionElement.textContent = '';
    });
}

function showBreedDetails() {
  const breed = breedElement.textContent;
  if (breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/list`)
      .then(response => response.json())
      .then(data => {
        const subBreeds = data.message;
        const description = subBreeds.length > 0 ? 'Sub-breeds: ' + subBreeds.join(', ') : 'No sub-breeds available.';
        descriptionElement.textContent = description;
      })
      .catch(error => {
        console.error('Error:', error);
        descriptionElement.textContent = 'Failed to fetch breed details.';
      });
  }
}

fetchRandomDogImage();
