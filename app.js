// server.js

const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Public directory to serve static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {

  res.render("index")

});

app.get('/services', (req, res) => {

  res.render("services")

})

app.get('/about-us', (req, res) => {
  
  res.render("aboutUs")

})

app.get('/contact-us', (req, res) => {

  res.render("contactUs")

})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});