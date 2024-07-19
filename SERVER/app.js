const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use('/users', userRoutes);





// aadhiganegoda
// LoonsLabAuth

// mongodb+srv://aadhiganegoda:LoonsLabAuth@cluster0.bq1liko.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
