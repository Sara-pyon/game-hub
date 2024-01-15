import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Trailers } from "../entities/Trailers";

const useTrailers = (gameId: number) => {
    const apiClient = new APIClient<Trailers>('/games/' +gameId + '/movies');

    return useQuery({
        queryKey: ['trailers', gameId],
        queryFn: apiClient.getAll,
        staleTime: 1*60*60*1000,
    });
};

export default useTrailers;