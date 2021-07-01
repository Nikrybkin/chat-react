const http = require("http");
const socketIo = require("socket.io");

const server = http.createServer();

const io = socketIo(server, {
  cors: "*",
});

const onlineUsers = [];

io.on("connection", (socket) => {
  if (onlineUsers.length < 2) {
    socket.emit("connected", socket.id);
    console.log("connected", socket.id);
    console.log("All good for: ", socket.id);

    socket.on("message", (data) => {
      const myMessage = { body: data, id: socket.id };
      console.log(data);
      io.emit("message", myMessage);
    });
  } else {
    socket.disconnect();
  }

  socket.on("disconnect", (socket) => {
    console.log("A user disconnected");
  });

  socket.on("typing", function (data) {
    socket.broadcast.emit("typing", data);
  });
});

server.listen(8000, () => {
  console.log("server started...");
});
