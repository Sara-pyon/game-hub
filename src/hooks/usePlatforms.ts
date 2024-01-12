import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { FetchResponse } from "../services/api-client";
import platforms from '../data/platforms';

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms')
                            .then(res => res.data),
    staleTime: ms('24h'),
    initialData: {count: platforms.length, results: platforms}
});

export default usePlatforms;
function ms(arg0: string): number | undefined {
    throw new Error('Function not implemented.');
}

