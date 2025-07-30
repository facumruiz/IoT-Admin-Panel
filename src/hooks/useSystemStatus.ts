import { getSystemStatus } from '../api/getSystemStatus';
import { Status } from '../types/message';
import { useQuery } from '@tanstack/react-query';




export const useSystemStatus = () => {

  const { data, isLoading, error, refetch } = useQuery<Status, Error>({
    queryKey: ['status'], 
    queryFn:  getSystemStatus, 
    refetchOnWindowFocus: false,
  });

  return {
    status: data, 
    statusLoading: isLoading,
    error: error,
    refetch: refetch,
  };
};



