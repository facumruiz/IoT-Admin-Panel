// src/api/mensajes.ts
import { PaginatedMessages } from '../types/message';
import axios from 'axios';

const API_URL = 'https://api-mqtt-mongo-prod.onrender.com/api';

interface GetMessagesParams {
  sensorType?: string;
  deviceName?: string;
  topic?: string;
  timestampFrom?: string;
  timestampTo?: string;
  page?: number;
  limit?: number;
}

export const getMessages = async (params?: GetMessagesParams): Promise<PaginatedMessages> => {
  try {
    const response = await axios.get(`${API_URL}/getMessages`, {
      params, // Dynamically include query parameters
    });

    if (response.status !== 200) {
      throw new Error('Error al obtener mensajes');
    }

    console.log('Mensajes obtenidos:', response.data);
    return response.data;
  } catch (err) {
    console.error('Error al obtener mensajes:', err);
    throw new Error('Error al obtener mensajes');
  }
};

