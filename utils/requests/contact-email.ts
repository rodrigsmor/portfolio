import { ContactFormData } from '@/types/contact';
import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export async function sendContactEmail(data: ContactFormData) {
  const response = await axios.post(`/api/send-email`, data, {
    baseURL
  });

  return response;
}