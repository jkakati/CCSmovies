let movies = {
    title: 'Venom',
    year: '2018',
    director: 'Ruben Fleischer',
    overview: 'When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego “Venom” to save his life.',
    genre: ['Horror', ' Science Fiction', ' Action', ' Thriller'],
    url: 'https://www.themoviedb.org/movie/335983-venom?language=en-US',
    poster: './images/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg'
};

const addMovie = `
    <p><img src=${movies.poster} width="250"></p>
    <h1>${movies.title}</h1>
    <p><b>Release Year:</b> ${movies.year}</p>
    <p><b>Director:</b> ${movies.director}</p>
    <p><b>Overview:</b> ${movies.overview}</p>
    <p><b>Genre:</b> ${movies.genre}</p>
    <p><a target="_parent" href=${movies.url}>Movie Link</a></p>
    `;

// let movies = [
//     'Venom',
//     '2018',
//     'Ruben Fleischer',
//     'When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego “Venom” to save his life.',
//     ['Horror', ' Science Fiction', ' Action', ' Thriller'],
//     'https://www.themoviedb.org/movie/335983-venom?language=en-US',
//     './images/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg'
// ];

// const addMovie = `
//     <p><img src=${movies[6]} width="250"></p>
//     <h1>${movies[0]}</h1>
//     <p><b>Release Year:</b> ${movies[1]}</p>
//     <p><b>Director:</b> ${movies[2]}</p>
//     <p><b>Overview:</b> ${movies[3]}</p>
//     <p><b>Genre:</b> ${movies[4]}</p>
//     <p><a target="_parent" href=${movies[5]}>Movie Link</a></p>
//     `;

document.body.innerHTML = addMovie;