// src/api/mensajes.ts
import { Message } from '../types/message';
import axios from 'axios';

const API_URL = 'https://api-mqtt-mongo-prod.onrender.com/api';


export const getMensajes = async (): Promise<Message[]>=> {
  try {
    const response = await axios.get(`${API_URL}/getMessages`, {
      method: 'GET',
    });
    if (response.status !== 200) {
      throw new Error('Error al obtener mensajes');
    }
    console.log('Mensajes obtenidos:', response.data);
    return response.data;
  } catch (err) {
    throw new Error('Error al obtener mensajes');

  }
};

