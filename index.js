const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.listen(3000, console.log('SERVIDOR ENCENDIDO'));
app.use('/jewel', require('./src/routes/JewelRoutes'));
app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});
