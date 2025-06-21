import { getMensajes } from '../api/messages';
import { Mensaje } from '../types/message';
import { useQuery } from '@tanstack/react-query';


export const useMensajes = () => {
  const { data, isLoading, error } = useQuery<Mensaje[], Error>({
    queryKey: ['mensajes'],
    queryFn: () => getMensajes(),
  });

  return {
    mensajes: data || [],
    loading: isLoading,
    error: error,
  };
};



