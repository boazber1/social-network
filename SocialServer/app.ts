const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(5000, () => console.log('server running on port 5000!'));

app.post('/login', (req, res) => {
  console.log('post body ', req.body);
  if (req.body.username === 'user' && req.body.password === 'user') {
    res.status(200).send({isLoggedIn: true});
  } else {
    res.status(401).send({
      isLoggedIn: false,
      message: 'username or password incorrect',
    })
  }
});