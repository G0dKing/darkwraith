const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json())

// Serve Static Build Files
app.use(express.static(path.join(__dirname, "client/dist")))

// API Test
app.get('/api/test', (req, res) => {
    res.json({ message: 'API Test-Endpoint Operational' })
})

// POST Endpoint
app.post('/api/capture', (req, res) => {
    const data = req.body
    console.log("Collected:", data)

    const filePath = path.join(__dirname, `capture.json`)

    fs.open(filePath, 'a+', (err, fd) => {
        if (err) {
            console.error(`Error opening file:`, err)
            return res.status(500).json({ message: `Error processing data` })
        }
    fs.close(fd, (err) => {
        if (err) {
            console.error('Error closing file:', err)
            return res.status(500).json({ message: `Error processing data` })
        }
            fs.appendFile(filePath, JSON.stringify(data, null, 2) + "\n", (err) => {
                if (err) {
                    console.error('Error writing to file', err);
                    return res.status(500).json({ message: `Error processing data` });
                }
                res.json({ message: `Data captured`});
            });
        });
    })
})    
// GET Endpoint
app.get('/api/capture', (req, res) => {
    const filePath = path.join(__dirname, `capture.json`);
    console.log(`File path:`, filePath); // Corrected the console.log usage of variable

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return res.json({ message: 'No data available' });
            }
            console.error('Error reading file:', err);
            return res.status(500).json({ message: 'Error fetching data' });
        }
        res.json(JSON.parse(data));
    });
});

// Proxy Vite+React Dev Server
if (process.env.NODE_ENV === 'development') {
    const { createProxyMiddleware } = require("http-proxy-middleware");
    app.use('/api', createProxyMiddleware({
        target: "http://localhost:5173",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            "^/api": "",
        },
    }));
}

// Fallback to Static Frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Local server listening at http://localhost:${PORT}`);
})
