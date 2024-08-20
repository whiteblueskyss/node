const express = require('express');

// Create an express app
const app = express();

//listen to port 3000
app.listen(3000);

app.get('/', (req, res) => {
  // res.send('<p>This is HomePage</p>');
  res.sendFile(__dirname + '/views/index.html');
});


app.get('/about', (req, res) => {
  // res.send('<p>This is About Page</p>');
  res.sendFile(__dirname + '/views/about.html');
});

// redirect
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404 page

app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/views/404.html');
}
);
