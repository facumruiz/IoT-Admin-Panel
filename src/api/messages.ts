// src/api/mensajes.ts
import { Mensaje } from '../types/message';

const API_URL = 'https://api-mqtt-mongo-prod.onrender.com/api';

export const getMensajes = async (): Promise<Mensaje[]> => {
  const response = await fetch(`${API_URL}/getMessages`);
  if (!response.ok) {
    throw new Error('Error al obtener mensajes');
  }
  const data = await response.json();
  return data;
};
