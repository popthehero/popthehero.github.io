export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { pin } = req.body;
  const CORRECT_PIN = process.env.ADMIN_PIN || "123456";

  if (pin === CORRECT_PIN) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ success: false, message: 'Incorrect PIN' });
  }
}