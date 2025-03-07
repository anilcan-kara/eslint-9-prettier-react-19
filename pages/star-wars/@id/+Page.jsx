import { useData } from 'vike-react/useData';

export default function Page() {
    const movie = useData();

    return (
        <>
            <h1>{movie.title}</h1>
            Release Date: {movie.release_date}
            <br />
            Director: {movie.director}
            <br />
            Producer: {movie.producer}
        </>
    );
}
