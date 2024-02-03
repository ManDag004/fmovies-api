const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

// Create a set to store all active connections
const clients = new Set();

wss.on('connection', (ws) => {
  console.log('New WebSocket connection');

  // Add the new connection to the set
  clients.add(ws);

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    // Send the message to all clients
    clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(`${message}`);
      }
    });
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
    // Remove the connection from the set
    clients.delete(ws);
  });
});

console.log('WebSocket server started');