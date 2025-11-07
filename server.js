const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected ✅'))
.catch(err => console.error('MongoDB connection error:', err));

// Example route
app.get('/', (req, res) => {
    res.send('Hello from your backend!');
});

// Example POST route to save data
app.post('/save', async (req, res) => {
    const TestSchema = new mongoose.Schema({ name: String });
    const TestModel = mongoose.model('Test', TestSchema);

    const newItem = new TestModel({ name: req.body.name });
    await newItem.save();

    res.send('Data saved successfully!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected ✅'))
.catch(err => console.error('MongoDB connection error:', err));

// Test route
app.get('/', (req, res) => {
    res.send('Hello from your backend!');
});

// Example route to save data
app.post('/save', async (req, res) => {
    const TestSchema = new mongoose.Schema({ name: String });
    const TestModel = mongoose.model('Test', TestSchema);

    const newItem = new TestModel({ name: req.body.name });
    await newItem.save();

    res.send('Data saved successfully!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
