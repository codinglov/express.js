const express = require('exxpress');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//initialize app and create port
const app = express();
const PORT = process.env.PORT || 3001;

//set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api',apiRoutes);
app.use('/', htmlRoutes);

//start server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));