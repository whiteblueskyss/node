const express = require('express');
const app = express();

// Set the view engine to EJS (or any other templating engine you are using)
app.set('view engine', 'ejs');

// Set the views directory
// app.set('views', __dirname + '/views');

// Define a route
app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs : blogs });
});

app.get('/about', (req, res) =>{
  res.render('about');
})

app.get('/about-us', (req, res) =>{
  res.redirect('about');
})

app.get('/posts/new', (req, res) =>{
  res.render('create');
})

app.use((req, res) =>{
  res.status(404).render('404');
})

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});