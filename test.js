cat <<EOF > local-api.js
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ 
    message: "Success! Your local API is running.",
    setup: "Built-in Node.js (No NPM needed)",
    port: 3000 
  }));
});
server.listen(3000, () => console.log('Check at: http://localhost:3000'));
EOF

node local-api.js
