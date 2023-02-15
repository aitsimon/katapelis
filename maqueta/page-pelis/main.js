const films  = document.querySelectorAll('.film');
const logo = document.querySelector('#logo-container');
logo.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/maqueta/page-pelis/index.html';
});
films.forEach((film) => {
    film.addEventListener('click', (e) => {
        window.location.href = 'http://127.0.0.1:5500/maqueta/page-peli/index.html'
	});
});