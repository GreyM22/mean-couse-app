const express = require('express');
const bodyParser = require('body-parser');
const Post = require('./post');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTION'
    );
  next();
});

app.use('/api/post', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  res.status(201).json({
    message: " Post added successfully"
  });
  console.log(post);
})

app.use('/api/posts',(req, res, next) => {
  const posts = [
    {
      id: 'aslkdjfoasnv',
      title: 'First Post',
      content: 'Content of the first post'
    },
    {
      id: 'sldjgfosdgpose',
      title: 'Second Post',
      content: 'Content of the second post'
    }
  ];
  res.status(200).json({
    message: "Posts where fetch from the server",
    posts: posts
  });
})


module.exports = app;
