import { useConfig } from 'vike-react/useConfig';

import { minimize3 } from './utils.js';
import { fetch } from 'bun';

export const data = async () => {
    // https://vike.dev/useConfig
    const config = useConfig();

    const response = await fetch('https://brillout.github.io/star-wars/api/films.json');
    const moviesData = await response.json();

    config({
        // Set <title>
        title: `${moviesData.length} Star Wars Movies`,
    });

    // We remove data we don't need because the data is passed to the client; we should
    // minimize what is sent over the network.
    const movies = minimize3(moviesData);

    return movies;
};
