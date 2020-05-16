const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'euro-slider');
const port = process.env.PORT || 3004;
app.use(express.static(publicPath));
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'public'));
});
app.listen(port, () => {
   console.log('Server is up!');
});