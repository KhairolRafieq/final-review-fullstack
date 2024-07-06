const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

var cors = require('cors');
const authRoutes = require('./routes/userauth/auth');
const bodyParser = require('body-parser')


// routes
const users = require('./routes/api/user');
const location = require('./routes/api/location');

const app = express();
//body-parse
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// cors
app.use(cors({ origin: true, credentials: true }));

// Connect Database
connectDB();


// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/location', location);
app.use('/api/users', users);
app.use('/api1', authRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));