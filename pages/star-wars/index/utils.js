export function minimize3(movies) {
    return movies.map((movie) => {
        const { title, release_date, id } = movie;
        return { title, release_date, id };
    });
}

export function minimize5(movie) {
    const { id, title, release_date, director, producer } = movie;
    const minimizedMovie = { id, title, release_date, director, producer };
    return minimizedMovie;
}
