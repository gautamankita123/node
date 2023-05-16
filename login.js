const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

// In-memory data structure to store messages and usernames
const messages = [];

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'your-secret-key', // Change this to a secure secret key
    resave: false,
    saveUninitialized: true
}));

// Route handler for "/login"
app.get('/login', (req, res) => {
    res.send(`
    <form action="/login" method="post">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Route handler for "/login" POST request
app.post('/login', (req, res) => {
    const { username } = req.body;
    // Store username in session
    req.session.username = username;

    // Redirect user to "/"
    res.redirect('/');
});

// Route handler for "/"
app.get('/', (req, res) => {
    // Check if username is stored in session
    const username = req.session.username;
    if (!username) {
        // If username is not set, redirect to "/login"
        res.redirect('/login');
    } else {
        // Show the send message form
        res.send(`
      <form action="/send" method="post">
        <label for="message">Message:</label>
        <input type="text" id="message" name="message" required>
        <button type="submit">Send</button>
      </form>
    `);
    }
});

// Route handler for "/send" POST request
app.post('/send', (req, res) => {
    const { message } = req.body;
    const username = req.session.username; // Retrieve username from session

    // Add the message and username to the in-memory data structure
    messages.push({ username, message });

    res.redirect('/messages');
});

// Route handler for reading messages
app.get('/messages', (req, res) => {
    // Show the sender's username along with the message
    const messageList = messages.map((message) => `${message.username}: ${message.message}`);
    res.send(`<pre>${messageList.join('\n')}</pre>`);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
