const jsonServer = require('json-server');
const path = require('path');
const express = require('express');
const app = express();
const router = jsonServer.router(path.join(__dirname, 'jobs.json'));
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 8000;

app.use('/api', middlewares, router);
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
