const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15", 
    port: 50541
  });

conn.setEncoding('utf8');

conn.on("connect", () => {
  console.log("Successfully connected to game server!");
  conn.write("Name: LHL");
});

conn.on("data", information => {
  console.log(information);
});

return conn;
};
