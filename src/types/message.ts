export interface Message {
  _id: string;
  sensorType?: string; 
  title?: string; 
  value: string; 
  status?: string; 
  topic: string; 
  timestamp: string; 
  isOnline?: boolean;
  deviceName?: string; 
  unit?: string; // Optional unit field
}

export interface PaginatedMessages {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: Message[];
}

