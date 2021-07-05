require ("dotenv").config({ path: "../config.env" });
const path = require('path');
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) =>{
    res.sendFile(Path2D.join(__dirname, 'frontend', 'build', 'index.html'));
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

