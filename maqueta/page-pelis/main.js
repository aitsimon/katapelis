const films = document.querySelectorAll('.film');
const logo = document.querySelector('#logo-container');
const iSearch = document.querySelector('input[type="search"]');
const apiUrl = 'http://www.omdbapi.com/?apikey=ab64c929&';
const apiKey = 'ab64c929';

logo.addEventListener('click', () => {
  window.location.href = 'http://127.0.0.1:5500/maqueta/page-pelis/index.html';
});
films.forEach((film) => {
  film.addEventListener('click', (e) => {
    window.location.href = 'http://127.0.0.1:5500/maqueta/page-peli/index.html';
  });
});

iSearch.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    sendRequestOMDB();
  }
});

function sendRequestOMDB() {
  let params = new Map();
  params.set('apikey', apiKey);
  params.set('s', document.querySelector('#search').value);
  let jsonParams = JSON.stringify(params);
  fetch(apiUrl+'s=disney')
    .then((response) => {
      document.querySelector('#search').value = '';
      console.log(response.text);

    })
    .catch((error) => {
      console.log(error);
      document.querySelector('#search').value = '';
    });
}
