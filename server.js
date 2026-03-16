const express = require('express');
const app = express();
const port = 3000;

// আপনার এপিআই লজিক এখানে
app.get('/api', (req, res) => {
  res.json({
    message: "Welcome to EasyService API! (Local Mode)",
    status: "Success",
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
