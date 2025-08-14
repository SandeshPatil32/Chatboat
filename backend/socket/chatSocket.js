module.exports = (io) => {
  io.on("connection", (user) => {
    console.log("User connected", user.id);
    user.on("chatMessage", (msg) => {
      console.log(`Message from ${user.id}`, msg);
      io.emit("chatMessage", msg);
    });
    user.on("disconnect", () => {
      console.log("User disconnected", user.id);
    });
  });
};

