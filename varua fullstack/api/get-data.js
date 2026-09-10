// Global variable in serverless memory (or connect your database here)
import { siteData } from './store.js'; 

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  return res.status(200).json(siteData);
}