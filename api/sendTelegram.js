const axios = require('axios');

module.exports = async (req, res) => {
  const { message } = req.query;

  if (!message) {
    return res.status(400).send('Message parameter is required');
  }

  // Send a request to Telegram API
  const url = `https://api.telegram.org/bot<7687887969:AAHrX0dIvnTZk_ZVh29xqbcGGsKSOcg77Wk>/sendMessage?chat_id=<@shipanooly>&text=${encodeURIComponent(message)}`;

  try {
    await axios.get(url);
    return res.status(200).send('Message sent');
  } catch (error) {
    return res.status(500).send('Failed to send message');
  }
};
