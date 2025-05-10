const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = 3001;
const API_KEY = 'AIzaSyAdF3_qwa_gC5XBkkSeHbjb61zxxEqy-s8';

app.use(cors());

app.get('/search', async (req, res) => {
    const term = req.query.term;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(term)}&type=video&videoCategoryId=10&key=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data.items);
    } catch (error) {
        console.error('YouTube fetch error:', error);
        res.status(500).json({ error: 'Failed to fetch from YouTube' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
