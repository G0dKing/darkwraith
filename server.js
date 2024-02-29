const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Endpoint "/api/submit"
app.post('/api/submit', (req, res) => {
    const newData = req.body;
    const pathToFile = path.join(__dirname, '/data/capture.json');
    
    // Ensure the directory exists
    fs.mkdirSync(path.dirname(pathToFile), { recursive: true });

    fs.readFile(pathToFile, (err, data) => {
        if (err && err.code !== 'ENOENT') {
            console.error(err);
            return res.status(500).send('An error occurred on the server.');
        }

        let json = [];
        if (data && data.length > 0) {
            try {
                json = JSON.parse(data);
            } catch (parseError) {
                console.error(parseError);
                return res.status(500).send('An error occurred parsing existing data.');
            }
        }

        json.push(newData);

        fs.writeFile(pathToFile, JSON.stringify(json, null, 2), (writeError) => {
            if (writeError) {
                console.error(writeError);
                return res.status(500).send('An error occurred saving the data.');
            }
            res.send('Data captured successfully.');
        });
    });
});

// API Endpoint "/api/viewdata"
app.get('/viewdata', (req, res) => {
    res.sendFile(path.join(__dirname, '/data/capture.json'));
});

// Proxy Vite+React Dev Server (Development Only)
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

// Serve Static Build Files
app.use(express.static(path.join(__dirname, "client/dist")));

// Fallback to Static Frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
