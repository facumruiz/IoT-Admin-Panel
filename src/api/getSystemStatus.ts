// src/api/mensajes.ts
import { Status } from '../types/message';
import axios from 'axios';

const API_URL = 'https://api-mqtt-mongo-prod.onrender.com/api';



export const getSystemStatus = async (): Promise<Status> => {
  try {
    const response = await axios.get(`${API_URL}/status`, {
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

