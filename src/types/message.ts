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
  unit?: string; 
}

export interface PaginatedMessages {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: Message[];
}

export interface Paginatation {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}


export interface Status {
  status: string;
}

