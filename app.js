const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const contentRoutes = require('./routes/content');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/content', contentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
