var http = require("http");
const WebSocket = require("ws");

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html charset=utf-8" });
  res.end(`${generateHTML()}`);
});

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  const sendTime = () => {
    const now = new Date();
    const time = now.toLocaleTimeString();
    ws.send(time);
  };

  const interval = setInterval(sendTime, 1000);

  ws.on("close", () => {
    clearInterval(interval);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function generateHTML() {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>raltime clock</title>
      </head>
      <body>
        <h2>現在時刻は: <span id="time"></span> (JST)</h2>
        <script>
          const socket = new WebSocket('ws://' + location.host)
          socket.onmessage = (event) => {
            document.getElementById('time').textContent = event.data
          }
        </script>
      </body>
    </html>
  `;
}
