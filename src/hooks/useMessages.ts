import { getMessages } from '../api/getMessages';
import { PaginatedMessages } from '../types/message';
import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';

interface UseMessagesParams {
  sensorType?: string;
  deviceName?: string;
  topic?: string;
  timestampFrom?: string;
  timestampTo?: string;
  page?: number;
  limit?: number;
}

export const useMessages = (params?: UseMessagesParams) => {
  // Memoize the query function using useCallback
  const fetchMessages = useCallback(() => getMessages(params), [params]);

  const { data, isLoading, error } = useQuery<PaginatedMessages, Error>({
    queryKey: ['mensajes', params], // Include params in the queryKey for caching
    queryFn: fetchMessages, // Use the memoized function
    refetchOnWindowFocus: false,
  });

  return {
    messages: data?.data || [], // Extract the `data` array from the paginated response
    pagination: {
      page: data?.page || 1,
      limit: data?.limit || 10,
      total: data?.total || 0,
      totalPages: data?.totalPages || 0,
    },
    loading: isLoading,
    error: error,
  };
};



