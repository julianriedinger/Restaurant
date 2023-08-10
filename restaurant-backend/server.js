const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",  // In a production environment, you should limit this to your actual source
    methods: ["GET", "POST"]
  }
});

let orders = {
    'Tisch 1': [],
    'Tisch 2': [],
    'Tisch 3': [],
    'Tisch 4': [],
    'Tisch 5': [],
    'Tisch 6': [],
    'Tisch 7': [],
    'Bar' :  [],
    'Draußen' : []
};

io.on('connection', (socket) => {
  // Send the current state of the orders to the client
  socket.emit('updateOrders', orders);

  // New event to receive the current state of the orders
  socket.on('getCurrentOrders', () => {
    console.log("Received request to get orders.");
    socket.emit('updateOrders', orders);
  });

  socket.on('updateOrder', (updatedOrders) => {
    orders = updatedOrders;
    console.log("orders object:", orders);
    io.emit('updateOrders', orders);
  });

  // New event for broadcasting the order to all clients
  socket.on('sendOrder', (sentOrder) => {
    orders = { ...orders, ...sentOrder };
    console.log("Received a new order:", sentOrder);
    io.emit('updateOrders', orders); // Broadcast the order to all connected clients
  });
});

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server running on http://172.20.10.10:${PORT}`);
});
