import useGenres from "./useGenres";

//genre ID から対象のgenre Object　を探す

const useGenre = (id?: number) => {
    const {data: genres} = useGenres();
    return genres.results.find(g => g.id === id);
}

export default useGenre;