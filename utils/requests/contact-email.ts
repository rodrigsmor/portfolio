import { SendEmailProps } from '@/app/api/send-email/route';
import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export async function sendContactEmail(data: SendEmailProps) {
  const response = await axios.post(`/api/send-email`, data, {
    baseURL
  });

  return response;
}