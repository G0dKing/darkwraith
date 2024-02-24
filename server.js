const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createProxyMiddleware } = require("http-proxy-middleware")

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Collect Data
app.post('/api/capture', (req, res) => {
    const data = req.body
    console.log("Collected:", data)

    const filePath = path.join(__dirname, 'capture.json')

    fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error('Error:', err)
            return res.status(500).json({ message: 'Could not capture data'})
        }
        res.json({ message: "Data collected." })
    })
})

// Serve Static Build Files
app.use(express.static(path.join(__dirname, "client/dist")))

// API Test
app.get('/api/test', (req, res) => {
    res.json({ message: 'API Test-Endpoint Operational' })
})

// Proxy Vite+React Dev Server
app.use(createProxyMiddleware({
    target: "http://localhost:5173",
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      "^/api": "",
    },
  }));

// Fallback to Static Frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Local server listening on ${PORT}`);
});
