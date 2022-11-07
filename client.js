const net = require("net");
const { IP, port } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: port,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: LHL");
    conn.write("Say: Here is the snake game.");
  });

  conn.on("data", (data) => {
    console.log("Game completed!");
  });

  return conn;
};

module.exports = { connect };
