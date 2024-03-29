import { useQuery } from '@tanstack/react-query';
import APIClient from "../services/api-client";
import platforms from '../data/platforms';
import { Platform } from '../entities/Platform';

const apiClient = new APIClient<Platform>('/platforms')

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 1*60*60*1000,
    initialData: {count: platforms.length, results: platforms}
});

export default usePlatforms;


