const socket = new WebSocket('wss://coffeev4.onrender.com');

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