const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://tarcisiomelo:K4uEGmLFgdNTijv0@cluster0-k9bdy.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
mongoose.connection.once('open', () => console.log('MongoDB database connection OK'));

app.use(require('./src/routes/index'));

app.listen(port, () => console.log(`Server is running on port: ${port}`));
