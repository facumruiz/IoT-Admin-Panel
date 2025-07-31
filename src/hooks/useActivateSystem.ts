import { useMutation } from '@tanstack/react-query';
import { postActivateSystem } from '../api/postActivateSystem';
import { PostActivate } from '../types/postMessages';

export const useActivateSystem = () => {
  const mutation = useMutation({
    mutationFn: (state: PostActivate) => postActivateSystem(state),
  });

  return {
    postMessage: mutation.mutate, 
    isLoading: mutation.status, 
    isPending: mutation.isPending, 
    isSuccess: mutation.isSuccess, 
    isError: mutation.isError, 
    error: mutation.error, 
    response:mutation.data as string | undefined, 
  };
};