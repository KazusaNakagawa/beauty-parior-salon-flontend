const http = require("http");
const {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} = require("./user_controller");

// HTTPサーバーの作成
const server = http.createServer((req, res) => {
  const { method, url } = req;
  const userId = url.split("/").pop();

  if (method === "GET" && url === "/users") {
    getUsers((users) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users));
    });
  } else if (method === "GET" && url.startsWith("/users/")) {
    getUsers((users) => {
      const user = users.find((u) => u.id === Number(userId));
      if (user) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(user));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "User not found" }));
      }
    });
  } else if (method === "POST" && url === "/users") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const user = JSON.parse(body);
      addUser(user, (newUser) => {
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newUser));
      });
    });
  } else if (method === "PUT" && url.startsWith("/users/")) {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const user = JSON.parse(body);
      updateUser(userId, user, (updatedUser) => {
        if (updatedUser) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(updatedUser));
        } else {
          res.writeHead(404, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "User not found" }));
        }
      });
    });
  } else if (method === "DELETE" && url.startsWith("/users/")) {
    deleteUser(userId, (deletedUser) => {
      if (deletedUser) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(deletedUser));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "User not found" }));
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Endpoint not found" }));
  }
});

// HTTPサーバーの起動
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
