const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors")
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes')
const profileRoutes = require('./routes/profileRoutes');
const path = require('path');
const cartRoutes = require('./routes/cartRoutes');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
//
//mongodb://localhost:27017/e_commerce
//mongodb+srv://kavinaya1201:kavinaya1201@cluster0.sfa0int.mongodb.net/e_commerce
mongoose.connect("mongodb://localhost:27017/biobazaar").then(() => {
    console.log("connected to database");
}).catch(err => {
    console.error("Failed to connect to database:", err);
});
app.use(cors());
app.use('/products', productRoutes);
app.use("/user", userRoutes);
app.use('/profile', profileRoutes);
app.use('/cart', cartRoutes);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});