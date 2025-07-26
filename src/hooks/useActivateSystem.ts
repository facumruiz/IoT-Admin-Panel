import { useMutation } from '@tanstack/react-query';
import { postActivateSystem } from '../api/postActivateSystem';
import { PostActivate } from '../types/postMessages';

export const usePostMessage = () => {
  const mutation = useMutation({
    mutationFn: (state: PostActivate) => postActivateSystem(state),
  });

  return {
    postMessage: mutation.mutate, // Function to trigger the mutation
    isLoading: mutation.status, // Loading state
    isSuccess: mutation.isSuccess, // Success state
    isError: mutation.isError, // Error state
    error: mutation.error, // Error details
    response:mutation.data as string | undefined, // Response data
  };
};