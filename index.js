const express = require('express');
const app = express();

app.use(express.json()); // Required to parse GitHub's JSON payload

app.post('/webhook', (req, res) => {
  console.log('✅ Webhook received!');
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  res.sendStatus(200); // Send OK response to GitHub
});

// adding random comment

app.listen(3000, () => {
  console.log('🚀 Server running on port 3000');
});
