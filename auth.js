const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const users = [{ id: 1, username: 'user1', password: 'password1' }];

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });
    return res.json({ token });
  }
  res.status(401).send('Invalid credentials');
});

module.exports = router;
