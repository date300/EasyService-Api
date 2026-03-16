import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({
    message: "Welcome to EasyService API!",
    status: "Success",
    timestamp: new Date().toISOString()
  });
}
