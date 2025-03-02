import { fetch } from 'bun';
import { useConfig } from 'vike-react/useConfig';

import { minimize5 } from '../index/utils';

export const data = async (pageContext) => {
    // https://vike.dev/useConfig
    const config = useConfig();

    const response = await fetch(`https://brillout.github.io/star-wars/api/films/${pageContext.routeParams.id}.json`);
    let movie = await response.json();

    config({
        // Set <title>
        title: movie.title,
    });

    // We remove data we don't need because the data is passed to
    // the client; we should minimize what is sent over the network.
    movie = minimize5(movie);

    return movie;
};
