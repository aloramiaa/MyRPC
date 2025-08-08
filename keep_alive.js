const express = require('express');
const server = express();

server.get('/', (_req, res) => {
  res.status(200).send("I'm alive");
});

server.get('/healthz', (_req, res) => {
  res.status(200).json({ status: 'ok', uptimeSeconds: process.uptime() });
});

function keepAlive() {
  const port = process.env.PORT || 3000; // Render provides PORT
  server.listen(port, () => {
    console.log(`Server is online on port ${port}`);
  });
}

module.exports = keepAlive;
