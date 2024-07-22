const container = document.querySelector('.container');
const result = document.querySelector('#resultado');
const form = document.querySelector('#formulario');

window.addEventListener('load', () => {
  form.addEventListener('submit', searchWeather);
});

function searchWeather(e) {
  e.preventDefault();

  // Validar
  const city = document.querySelector('#ciudad').value;
  const country = document.querySelector('#pais').value;

  if (city === '' || country === '') {
    // Hubo un error
    showError('Both fields are required');
    return;
  }

  // Consultar la API
  consultAPI(city, country);
}

function showError(message) {
  const alert = document.querySelector('.error');
  if (!alert) {
    const alert = document.createElement('div');
    alert.classList.add('px-4', 'py-3', 'max-w-md', 'mx-auto', 'mt-6', 'text-center', 'error');
    alert.innerHTML = `
    <strong class="font-bold">Error!</strong>
    <span class="block">${message}</span>
  `;
    container.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 4000);
  }
}

function consultAPI(city, country) {
  const appID = '3c2d3debf60bb344937ac291c2158d04';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appID}`;

  spinner(); // Shows a loading spinner

  setTimeout(() => {
    fetch(url)
      .then(answer => answer.json())
      .then(data => {
        cleanHTML(); // Limpia el HTML previo
        if (data.cod === '404') {
          showError('City not found');
          return;
        }

        // Imprime la respuesta en el HTML
        showWeather(data);
      });
  }, 1800);
}

function showWeather(data) {
  const {
    name,
    main: { temp, temp_max, temp_min },
  } = data;

  const temperature = kelvinToCentigrade(temp);
  const maxTemperature = kelvinToCentigrade(temp_max);
  const minTemperature = kelvinToCentigrade(temp_min);

  const nameCity = document.createElement('p');
  nameCity.textContent = `Clima en ${name}`;
  nameCity.classList.add('font-bold', 'text-2xl');

  const actual = document.createElement('p');
  actual.innerHTML = `${temperature} &#8451;`;
  actual.classList.add('font-bold', 'text-6xl');

  const tempMax = document.createElement('p');
  tempMax.innerHTML = `Max: ${maxTemperature}  &#8451;`;
  tempMax.classList.add('text-xl');

  const tempMin = document.createElement('p');
  tempMin.innerHTML = `Min: ${minTemperature}  &#8451;`;
  tempMin.classList.add('text-xl');

  const resultDiv = document.createElement('div');
  resultDiv.classList.add('text-center', 'text-white');
  resultDiv.appendChild(nameCity);
  resultDiv.appendChild(actual);
  resultDiv.appendChild(tempMax);
  resultDiv.appendChild(tempMin);

  result.appendChild(resultDiv);
}

const kelvinToCentigrade = degrees => parseInt(degrees - 273.15);

function cleanHTML() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}

function spinner() {
  cleanHTML();

  const divSpinner = document.createElement('div');
  divSpinner.classList.add('spinner');
  result.appendChild(divSpinner);
}
