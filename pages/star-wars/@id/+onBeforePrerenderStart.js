import { fetch } from 'bun';

import { minimize3 } from '../index/utils';

const getMovies = async () => {
    const response = await fetch('https://brillout.github.io/star-wars/api/films.json');
    const moviesData = await response.json();
    const movies = minimize3(moviesData);
    return movies;
};

export async function onBeforePrerenderStart() {
    const movies = await getMovies();
    return movies.map((movie) => `/star-wars/${movie.id}`);
}
