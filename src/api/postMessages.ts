// src/api/mensajes.ts
import axios from 'axios';
import { PostMessage } from '../types/postMessages';

const API_URL = 'https://api-mqtt-mongo-prod.onrender.com/api';

export const postMessages = async ({ topic, message }: PostMessage): Promise<void> => {
  try {
    const response = await axios.post(`${API_URL}/publish`, {
      topic,
      message,
    });

    if (response.status !== 200) {
      throw new Error('Error sending the message');
    }

    console.log('Message sent successfully:', response.data);
    return response.data; 
  } catch (err) {
    console.error('Error sending the message:', err);
    throw new Error('Error sending the message');
  }
};

