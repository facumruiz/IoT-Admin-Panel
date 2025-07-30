// src/hooks/useToast.ts
import { toast, ToastOptions, ToastPosition, Theme } from 'react-toastify';

type ToastType = 'success' | 'error' | 'info' | 'warning';

const useToast = () => {
  const showToast = (
    message: string,
    type: ToastType = 'info',
    options: ToastOptions = {}
  ) => {
    const defaultOptions: ToastOptions = {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      ...options,
    };

    switch (type) {
      case 'success':
        toast.success(message, defaultOptions);
        break;
      case 'error':
        toast.error(message, defaultOptions);
        break;
      case 'warning':
        toast.warn(message, defaultOptions);
        break;
      default:
        toast.info(message, defaultOptions);
    }
  };

  return { showToast };
};

export default useToast;