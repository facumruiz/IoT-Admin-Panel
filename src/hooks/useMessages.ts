import { useEffect, useState } from 'react';
import { getMensajes } from '../api/messages';
import { Mensaje } from '../types/message';

export const useMensajes = () => {
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMensajes();
        setMensajes(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { mensajes, loading };
};
