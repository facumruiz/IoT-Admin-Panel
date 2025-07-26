import { getSystemStatus } from '../api/getSystemStatus';
import { Status } from '../types/message';
import { useQuery } from '@tanstack/react-query';




export const useSystemStatus = () => {

  const { data, isLoading, error } = useQuery<Status, Error>({
    queryKey: ['status'], 
    queryFn:  getSystemStatus, 
    refetchOnWindowFocus: false,
  });

  return {
    status: data, // Extract the `data` array from the paginated response
    statusLoading: isLoading,
    error: error,
  };
};



