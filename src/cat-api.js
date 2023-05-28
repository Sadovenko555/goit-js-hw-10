const apiKey = 'live_8pRB7wUDchLuEjs2l5O8xLXivbTk1OoHlidwtICsfonsjuzYF64zkACKGi8Q1Yjd';

export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': apiKey
    }
  })
    .then(response => response.json());
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${apiKey}`;

  return fetch(url, {
    headers: {
      'x-api-key': apiKey
    }
  })
    .then(response => response.json())
    .then(data => data[0]);
}
