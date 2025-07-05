import { getMessages } from '../api/getMessages';
import { Message } from '../types/message';
import { useQuery } from '@tanstack/react-query';


export const useMessages = () => {
  const { data, isLoading, error } = useQuery<Message[], Error>({
    queryKey: ['mensajes'],
    queryFn: () => getMessages(),
  });

  return {
    messages: data || [],
    loading: isLoading,
    error: error,
  };
};



