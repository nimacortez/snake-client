let connection; 

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}

const handleUserInput = function (input) {
  console.log("This is working.", input);
  if (input === "\u0003") {
    process.exit();
  }
  if (input === "w") {
    connection.write("Move: up");
  }
  if (input === "d") {
    connection.write("Move: right");
  }
  if (input === "s") {
    connection.write("Move: down");
  }
  if (input === "a") {
    connection.write("Move: left");
  }
};

module.exports = { setupInput };