const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/data', (req, res) => {
    res.json({
        status: "success",
        items: ["Item 1", "Item 2", "Item 3"]
    });
});

app.listen(5000, () => {
    console.log("✅ Server running on http://localhost:5000");
});
