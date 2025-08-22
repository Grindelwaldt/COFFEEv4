const socket = new WebSocket('ws://192.168.1.100:3000');

    socket.onopen = () => {
      console.log('Connected to server');
      socket.send('Hello from client!');
    };

    socket.onmessage = (event) => {
      console.log('Message from server:', event.data);
    };

    socket.onclose = () => {
      console.log('Disconnected from server');
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };