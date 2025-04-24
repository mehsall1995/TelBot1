const axios = require('axios');

export default async function handler(req, res) {
  const { message } = req.query;

  if (!message) {
    return res.status(400).json({ error: 'Message parameter is required' });
  }

  const botToken = '7687887969:AAHrX0dIvnTZk_ZVh29xqbcGGsKSOcg77Wk';
  const chatId = '@shipanooly';
  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

  try {
    const response = await axios.get(url);
    return res.status(200).json(response.data);
  } catch (error) {
    console.error('Failed to send message:', error.response?.data || error.message);
    return res.status(500).json({ error: 'Failed to send message', details: error.message });
  }
  
}
